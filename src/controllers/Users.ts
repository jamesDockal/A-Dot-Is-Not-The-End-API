import { Request, Response } from "express";
import { getRepository } from "typeorm";
import UserEntity from "../entities/UserEntity";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";

class UsersController {
  async register(req: Request, res: Response) {
    const { password, email } = req.body;

    const userRepository = getRepository(UserEntity);

    const password_hash = await hash(password, 8);

    const user = await userRepository.create({
      password_hash,
      email,
    });

    await userRepository.save(user);

    const secretKey = process.env.SECRET_KEY || "some_secret_key";
    const token = await sign(user.id, secretKey);

    return res.json({ user, token });
  }
}

export default UsersController;
