import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Borrow } from "./borrow";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "float", default: 0 })
  score: number;

  @OneToMany(() => Borrow, (borrow) => borrow.book)
  borrows: Borrow[];
}
