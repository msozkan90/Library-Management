import { User } from "../entities/user";
import dataSource from "../data-source";
import AppError from "../utils/appError";

export class UserService {
  private userRepository = dataSource.getRepository(User);

  async getAllUsers() {
    const users = await this.userRepository.find({ relations: ["borrows"] });
    return users;
  }

  async getUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new AppError("User not found.", 404);

    return user;
  }

  async createUser(name: string) {
    const newUser = this.userRepository.create({ name });

    if (!newUser) throw new AppError("User not created.", 500);

    return this.userRepository.save(newUser);
  }
}
