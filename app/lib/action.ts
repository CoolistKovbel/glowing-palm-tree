"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, defaultSession, sessionOptions } from "./dictionary";
import dbConnect from "./db";
// import { ethers } from "ethers";
import { User } from "../models/User";
import { redirect } from "next/navigation";
// import { compare, hash } from "bcryptjs";
import { sendMail } from "./mail";
import { revalidatePath } from "next/cache";
import { Transaction } from "../models/Transaction";
import { WaitList } from "../models/WaitList";
import { Checkout } from "../models/Checkout";

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

    if (UsrExist && UsrExist.length > 0) {
      console.log("user is here....")
      if (UsrExist.sig === signature) {
        session.userId = UsrExist._id.toString();
        session.username = UsrExist.username;
        session.image = UsrExist.image;
        session.email = UsrExist.email;
        session.address = UsrExist.address;

        session.role = UsrExist.role;
        session.isLoggedIn = true;
        session.account = UsrExist.account;

        await session.save();

        return "noice";
      }

    } else {
      console.log("user is not here.......")
      const newUser: any = new User({
        username: username as string,
        sig: signature as string,
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
      session.account = newUser.address

      session.role = newUser.role;
      session.isLoggedIn = true;
      session.account = newUser.account;

      await session.save();
    }

    return "noice";
  } catch (error) {
    console.log(error);

    return "notnoice";
  }
};

export const joinWaitList = async (email: any) => {
  try {
    console.log("joinging waht list");

    await dbConnect();

    const userJoin = new WaitList({ email });

    console.log(userJoin);

    await userJoin.save();

    return JSON.stringify(userJoin);
  } catch (error) {
    console.log("error");
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

    for (let key in userObj) {
      // Check if userObj[key] is defined and not null or undefined
      if (userObj.hasOwnProperty(key) && userObj[key] != null) {
        if (key === "profileImage" && userObj[key] instanceof File) {
          // Handle file upload for profileImage
          const file = userObj[key];

          if (file.size > 0) {
            const fileUrl = await uploadFile(file); // Upload the file and get URL/path
            userDocument[key] = fileUrl; // Update userDocument with file URL or path
          }
        } else {
          // Only update if the key exists in userDocument
          if (
            userObj[key] !== undefined &&
            userObj[key] !== "undefined" &&
            userObj[key] !== null &&
            userObj[key] !== ""
          ) {
            userDocument[key] = userObj[key];
            user[key] = userObj[key];
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

export const uploadFile = async (file: any) => {
  try {
    console.log("finish thkis  uploading file beep beep");
  } catch (error) {
    console.log("error uploadiung files");
  }
};

export const createTranscation = async (res: any) => {
  try {
    console.log("creating transaction");

    await dbConnect();

    const transact = new Transaction(res);

    await transact.save();

    return transact;
  } catch (error) {
    console.log(error);
  }
};

export const updateCurrentTransaction = async (
  transactionHash: any,
  transcactionId: any
) => {
  await dbConnect();
  try {
    console.log("updaing gerr current");

    const currentTranasction = await Transaction.find({ _id: transcactionId });

    console.log(currentTranasction, "updated user transcations completed");

    return "success";
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

// handle  user logout
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const MakeARequest = async (formData: FormData) => {
  try {
    console.log("error");

    return "need to finish";
  } catch (error) {
    console.log(error);
    console.log("error");
  }
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
      subject: data.subject as string || "contactus",
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

export async function AddToCheckOut(formData: FormData, siginature: any) {

  const { amount, pouch, sig } = Object.fromEntries(formData); 
  const user = await getSession()

  console.log("checking oiut", siginature)

  try {

    console.log("working on checking out");
    await dbConnect();

    const gg = new Checkout({
      customer: user.userId as string,
      amount: amount,
      product: pouch as string,
      signature: sig,
      pendingShipping: true,
    });

    await gg.save();

    revalidatePath("/shop");

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

export const getAllTranasctions = async () => {
  try {
    await dbConnect()


    const trans = await Transaction.find({})

    console.log(trans)



    return {
      error: "success",
      payload: ""
    }
  } catch (error) {
    return {
      error: "error",
      payload: error
    }
  }
}