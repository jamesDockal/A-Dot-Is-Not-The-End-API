import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("books")
class BookEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  title: string;

  @Column("json", { array: true })
  chapters: JSON[];
}

export default BookEntity;
