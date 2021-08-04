import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { getRepository } from "typeorm";
import UserEntity from "../entities/UserEntity";

class UsersMiddleware {
  registerCrendentials(req: Request, res: Response, next: NextFunction) {
    const { password, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "No email provided!" });
    }

    if (!password) {
      return res.status(400).json({ error: "No password provided!" });
    }
    return next();
  }
  async userAlredyRegistered(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const userRepository = await getRepository(UserEntity);
    const user = await userRepository.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "Email alredy in use!" });
    }

    return next();
  }
  async userExists(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const userRepository = await getRepository(UserEntity);
    const user = await userRepository.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    res.locals.user = user;

    return next();
  }
  async isLogged(req: Request, res: Response, next: NextFunction) {
    // get the header authorization where the token must be
    const bearerHeader = req.headers["authorization"];

    //if there is no authorization header, it will return a error
    if (!bearerHeader) {
      return res.status(401).json({
        error:
          "Not Authorized, you must have authorization header with 'Bearer ...token'!",
      });
    }

    // separete the authauthorizationr header value into a array
    // header value must be "Bearer ...token"
    const splitedHeader = bearerHeader.split(" ");

    // return an error if there is no Bearer word or token
    if (splitedHeader.length < 2) {
      return res
        .status(400)
        .json({ error: "Token bad formated, it should be 'Bearer ...token'" });
    }

    // get the word "Bearer" and the token
    const [bearer, token] = splitedHeader;

    // if the bearer is no written Bearer return a error
    if (bearer !== "Bearer") {
      return res
        .status(400)
        .json({ error: "Token bad formated, it should be 'Bearer ...token" });
    }

    // validate the token
    try {
      const secretKey = process.env.SECRET_KEY || "some_secret_key";
      const user_id = await verify(token, secretKey);
      res.locals.jwt_user_id = user_id;
      return next();
    } catch (e) {
      return res.status(400).json({ error: "Invalid Token" });
    }
  }
}

export default UsersMiddleware;
