import { EntityRepository, Repository } from "typeorm";
import BookEntity from "../entities/BookEntity";

@EntityRepository(BookEntity)
class BookRepository extends Repository<BookEntity> {}

export default BookRepository;
