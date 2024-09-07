import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";
import { Book } from "./book";

@Entity()
export class Borrow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.borrows, { nullable: false })
  user: User;

  @ManyToOne(() => Book, (book) => book.borrows, { nullable: false })
  book: Book;

  @Column({ type: "date" })
  borrowedAt: Date;

  @Column({ type: "date", nullable: true })
  returnedAt: Date | null;

  @Column({ type: "float", nullable: true })
  score: number | null;
}
