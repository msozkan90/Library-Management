import { Repository } from "typeorm";
import { Book } from "../entities/book";
import dataSource from "../data-source";
import AppError from "../utils/appError";

export class BookService {
  private bookRepository: Repository<Book>;

  constructor() {
    this.bookRepository = dataSource.getRepository(Book);
  }

  async getAllBooks() {
    const books = await this.bookRepository
      .createQueryBuilder("book")
      .select(["book.id", "book.name"])
      .getMany();

    return books;
  }

  async getBookById(id: number) {
    const book = await this.bookRepository.findOneBy({ id });

    if (!book) {
      throw new AppError("Book not found", 404);
    }

    return book;
  }

  async createBook(name: string) {
    const newBook = this.bookRepository.create({ name });

    if (!newBook) {
      throw new AppError("Book not created", 500);
    }

    return this.bookRepository.save(newBook);
  }
}
