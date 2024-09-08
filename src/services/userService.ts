import { User } from "../entities/user";
import dataSource from "../data-source";
import AppError from "../utils/appError";

export class UserService {
  private userRepository = dataSource.getRepository(User);

  async getAllUsers() {
    const users = await this.userRepository.find({});
    return users;
  }

  async getUser(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ["borrows", "borrows.book"],
    });

    if (!user) throw new AppError("User not found.", 404);

    const books = {
      past: user.borrows
        .filter((borrow) => borrow.returnedAt !== null)
        .map((borrow) => ({
          name: borrow.book.name,
          userScore: borrow.score || 0,
        })),
      present: user.borrows
        .filter((borrow) => borrow.returnedAt === null)
        .map((borrow) => ({
          name: borrow.book.name,
        })),
    };

    return {
      id: user.id,
      name: user.name,
      books,
    };
  }

  async createUser(name: string) {
    const newUser = this.userRepository.create({ name });

    if (!newUser) throw new AppError("User not created.", 500);

    return this.userRepository.save(newUser);
  }
}
