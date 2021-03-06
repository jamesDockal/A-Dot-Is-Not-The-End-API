import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;
}

export default UserEntity;
