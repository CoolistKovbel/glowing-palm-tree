"use server"

import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import dbConnect from "./db";

export const getCurrenbyUserId = async (userId: string) => {
  try {
    await dbConnect();

    const user = await User.find({ _id: userId as string })

    console.log(user, "there is user");

    return JSON.stringify(user[0]);
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUserTransactionById = async (id: any) => {
  try {
    console.log("get current user by id", id);

    await dbConnect();

    const userTransaction = await Transaction.find({ user: id });


    

    console.log(userTransaction);
  } catch (error) {
    console.log(error);
  }
};
