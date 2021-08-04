import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class books1628065143600 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "uuid",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "title",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },

          {
            name: "chapters",
            type: "jso[]",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // drop the users table
    queryRunner.dropTable("books");
  }
}
