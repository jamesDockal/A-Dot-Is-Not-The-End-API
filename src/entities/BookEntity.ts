import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type IChapter = {
  title: string;
  content: string;
};

@Entity("books")
class BookEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  title: string;

  @Column("json", { array: true })
  chapters: IChapter[];
}
export default BookEntity;
