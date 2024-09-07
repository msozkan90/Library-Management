import { Repository, Not, IsNull } from "typeorm";
import { Borrow } from "../entities/borrow";
import { User } from "../entities/user";
import { Book } from "../entities/book";
import dataSource from "../data-source";
import AppError from "../utils/appError";

export class BorrowService {
  private borrowRepository: Repository<Borrow>;
  private userRepository: Repository<User>;
  private bookRepository: Repository<Book>;

  constructor() {
    this.borrowRepository = dataSource.getRepository(Borrow);
    this.userRepository = dataSource.getRepository(User);
    this.bookRepository = dataSource.getRepository(Book);
  }

  async borrowBook(userId: number, bookId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const book = await this.bookRepository.findOne({ where: { id: bookId } });

    if (!user || !book) throw new AppError("User or Book not found", 404);

    const existingBorrow = await this.borrowRepository.findOne({
      where: { book, returnedAt: IsNull() },
    });
    if (existingBorrow) throw new AppError("Book already borrowed", 400);

    const borrow = this.borrowRepository.create({
      user,
      book,
      borrowedAt: new Date(),
    });

    return this.borrowRepository.save(borrow);
  }

  async returnBook(userId: number, bookId: number, score: number) {
    const borrow = await this.borrowRepository.findOne({
      where: {
        user: { id: userId },
        book: { id: bookId },
        returnedAt: IsNull(),
      },
      relations: ["book"],
    });

    if (!borrow) {
      throw new AppError("Borrow record not found or already returned", 400);
    }

    borrow.returnedAt = new Date();
    borrow.score = score;
    const updatedBorrow = await this.borrowRepository.save(borrow);

    const book = borrow.book;
    const borrows = await this.borrowRepository.find({
      where: {
        book: { id: bookId },
        score: Not(IsNull()),
      },
    });

    const totalScore = borrows.reduce(
      (sum, borrow) => sum + (borrow.score || 0),
      0
    );
    book.score = totalScore / borrows.length;

    await this.bookRepository.save(book);

    return updatedBorrow;
  }
}
