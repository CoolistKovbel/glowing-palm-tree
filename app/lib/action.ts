"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, defaultSession, sessionOptions } from "./dictionary";
import dbConnect from "./db";
import { ethers } from "ethers";
import { User } from "../models/User";
import { redirect } from "next/navigation";
import { compare, hash } from "bcryptjs";
import { sendMail } from "./mail";
import { revalidatePath } from "next/cache";

const sendMessage = `Hi, welcome to hell`;

// token and session actions
export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

// Form actions
export const Registrar = async (
  state: string | undefined,
  formData: FormData
) => {
  try {
    const { username, signature, address } = Object.fromEntries(formData);
    const session = await getSession();

    await dbConnect();

    const UsrExist: any = await User.findOne({ address });

    if (UsrExist) {
      if (UsrExist.signature === signature) {
        session.userId = UsrExist._id.toString();
        session.username = UsrExist.username;
        session.image = UsrExist.image;
        session.email = UsrExist.email;

        session.role = UsrExist.role;
        session.isLoggedIn = true;
        session.account = UsrExist.account;

        await session.save();

        return "noice";
      }
    }

    const newUser: any = new User({
      username: username as string,
      signature: signature as string,
      address: address as string,
      Address: null,
      city: null,
      state: null,
      zip: null,
      email: null,
      phone: null,
      profileImage: null,
    });

    await newUser.save();

    session.userId = newUser._id.toString();
    session.username = newUser.username;
    session.image = newUser.image;
    session.email = newUser.email;

    session.role = newUser.role;
    session.isLoggedIn = true;
    session.account = newUser.account;

    await session.save();

    return "noice";
  } catch (error) {
    console.log(error);

    return "notnoice";
  }
};

export const updateUserAccount = async (formData: FormData) => {
  const userObj: any = Object.fromEntries(formData);
  const user: any = await getSession();

  try {
    console.log("handleujpdate");

    await dbConnect();

    const userExist: any = await User.findById(user.userId);

    if (!userExist) return "are you valid?";

    const userDocument = userExist;

    for (let key in userDocument.toObject()) {
      if (Object.hasOwn(userObj, key)) {


        console.log(userObj[key])




        if (typeof userObj[key] === "object" || userObj[key] !== null ) {
          // console.log(userObj[key] , " whtye")

          userDocument[key] = userObj[key];
          user[key] = userObj[key];

          if (userObj[key].size === 0 && userObj[key].length === 0) {
            // console.log(userObj[key] , " whty")

            // console.log(user[key], userObj[key], "dee ehstkegsevssdv");

            userObj[key] = "null";
            userDocument[key] = "null";
          }
        }
      }
    }

    await userDocument.save();

    await user.save();

    revalidatePath("/profile/update");
  } catch (error) {
    console.log(error);
  }
};
// handle  user logout
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export async function ContactEmail(
  prevState: string | object | undefined,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());
  const content = data.content as string;

  try {
    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: data.email as string,
      subject: data.subject as string,
      content: content.concat(` Message situated from ${data.email} `),
    });

    return {
      message: `${data.email} your message has been sent, if you cant wait... call`,
    };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}

// Chwckout set up
export async function AddToCheckOut(formData: FormData) {
  const { amount, pouch } = Object.fromEntries(formData);
  const user = await getSession();

  try {
    console.log("working on checking out");
    await dbConnect();

    const gg = new Checkout({
      author: user.userId,
      amount: amount as string,
      product: pouch as string,
      pending: true,
    });

    await gg.save();

    revalidatePath("/");

    return "Success";
  } catch (error) {
    console.log("error", error);
    return "failed";
  }
}

// Handle user new job request
export const handleShippingInfo = async (userInput: FormData) => {
  try {
    console.log("handling new jobn");

    await dbConnect();
  } catch (error) {
    console.log(error);
  }
};

export const handleUserUpdate = async (userInput: FormData) => {
  const { username, email, password, metaAddress } =
    Object.fromEntries(userInput);

  try {
    console.log("handling new jobn");

    await dbConnect();
  } catch (error) {
    console.log(error);
  }
};
