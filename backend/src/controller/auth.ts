import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/user";
import { sendEmail } from "../utils/sendEmail";
import MyError from ".././utils/MyError";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(newUser.password, salt);
    const user = await User.create({ ...newUser, password: hashpassword });
    const verifyToken = jwt.sign(
      { email: user.email },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: "1d" }
    );
    console.log("fafad", verifyToken);

    sendEmail({ email: user.email!, token: verifyToken });

    res.status(201).json({
      message:
        "Шинэ хэрэглэгч амжилттай бүртгэгдлээ таны бүртгэлтэй имэйл хаяг руу баталгаажуулах email илгээсэн.",
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Шинэ хэрэглэгч бүртгэх үед алдаа гарлаа." });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userPassword, userEmail } = req.body;
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      throw new MyError(`User is not enrolled`, 400);
    }
    const isValid = await bcrypt.compare(userPassword, user.password!);

    if (!isValid) {
      throw new MyError(`Email or password is invalid`, 400);
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const { password, ...otherparams } = user;
    res.status(201).json({
      message: "Хэрэглэгч амжилттай нэвтэрлээ",
      token,
      user: otherparams,
    });
  } catch (error) {
    next(error);
  }
};
