import { Request, Response } from "express";
import { getRepository } from "typeorm";
import UserEntity from "../entities/UserEntity";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

type IUser = {
  uuid: string;
  email: string;
  password_hash: string;
};

class UsersController {
  async register(req: Request, res: Response) {
    try {
      const { password, email } = req.body;

      const userRepository = getRepository(UserEntity);

      const password_hash = await hash(password, 8);

      const user = await userRepository.create({
        password_hash,
        email,
      });

      await userRepository.save(user);

      const secretKey = process.env.SECRET_KEY || "some_secret_key";
      const token = await sign(user.uuid, secretKey);

      return res.json({
        user: {
          email: user.email,
        },
        token,
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  async login(req: Request, res: Response) {
    try {
      const { password } = req.body;
      const user: IUser = res.locals.user;

      // verifying the password
      const rightPassword = await compare(password, user.password_hash);
      if (!rightPassword) {
        return res.status(401).json({ error: "Invalid password" });
      }

      const secretKey = process.env.SECRET_KEY || "some_secret_key";
      const token = await sign(user.uuid, secretKey);

      return res.json({
        token,
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default UsersController;
