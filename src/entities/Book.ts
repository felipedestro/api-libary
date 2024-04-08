import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("books")
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "integer", nullable: true })
  pages: number;

  @Column({ type: "bigint" })
  isbn: number;

  @Column("text")
  company: string;
}
