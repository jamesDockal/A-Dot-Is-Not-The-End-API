import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1628044016426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "users",
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
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },

          {
            name: "password_hash",
            type: "varchar",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // drop the users table
    queryRunner.dropTable("users");
  }
}
