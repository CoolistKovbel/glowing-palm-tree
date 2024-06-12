import { User } from "../models/User";
import dbConnect from "./db";

export const getCurrenbyUserId = async (userId: string) => {
  try {
    await dbConnect();

    const user = await User.find({ _id: userId }).lean();

    console.log(user);

    return user[0]

  } catch (error) {
    console.log(error);
  }
};
