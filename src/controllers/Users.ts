import { Request, Response } from "express";
import { getRepository } from "typeorm";
import UserEntity from "../entities/UserEntity";
import { hash } from "bcrypt";

class UsersController {
  async register(req: Request, res: Response) {
    const { password, email } = req.body;

    const userRepository = getRepository(UserEntity);

    const password_hash = await hash(password, 8);

    const user = await userRepository.create({
      password_hash,
      email,
    });

    return res.json({ user });
  }
}

export default UsersController;
