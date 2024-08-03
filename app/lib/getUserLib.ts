"use server";

import { Checkout } from "../models/Checkout";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import dbConnect from "./db";

export const getCurrenbyUserId = async (userId: string) => {
  try {
    await dbConnect();

    const user = await User.find({ _id: userId as string });

    console.log(user, "there is user");

    return JSON.stringify(user[0]);
  } catch (error) {
    console.log(error);
    console.log("error in getting curent user");
  }
};

export const getCurrentUserTransactionById = async (id: any) => {
  try {
    console.log("get current user by id", id.userId);

    await dbConnect();

    const userTransaction = await Transaction.find({
      user: id.userId as string,
    });

    console.log(userTransaction);

    return "Success";
  } catch (error) {
    console.log(error);
  }
};

export const getUserCheckout = async (userId: string) => {
  try {
    await dbConnect();

    const stupud = await Checkout.find({
      customer: userId,
    });

    return stupud.filter((item: any) => item.pendingShipping === true);
  } catch (error) {
    console.log("kil yourself", error);
  }
};

export const checkUserAddress = async (userId:string) => {
  try {
    console.log("chekcing user address")

    const userAddre = await User.findById(userId)


    console.log(userAddre)

    return userAddre?.Address

  } catch (error) {
    console.log("error", error)
  }
}

export const userPurchesHistory = async (userId: string) => {
  try {
    console.log('getting user transactions')
    await dbConnect()

    const userCheckout = (await Checkout.find({customer: userId})).filter((item) => item.pendingShipping === false)

    return userCheckout
  } catch (error) {
    console.log("error", error)
  }
}

export const userTransactionHistory = async (userId: string) => {
  try {
    console.log("getting utransactions histroy")

    await dbConnect()


    const transactions = (await Transaction.find({user:userId}))

    console.log(transactions, "trnasctions")

    return transactions
    

  } catch (error) {
    console.log("Error")
  }
}