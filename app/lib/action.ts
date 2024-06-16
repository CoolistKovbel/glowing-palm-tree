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
import { Job } from "../models/jobs";
import { Checkout } from "../models/checkout";
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
export const login = async (
  prevState: undefined | string,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const sign = formData.get("sig") as string;

  try {
    await dbConnect();
    const session = await getSession();

    // Check user in db
    const existingUser = await User.findOne({ email });

    const existingBySD = await User.findOne({ sig: sign });

    if (existingBySD) {
      // b -
      const verify = ethers.utils.verifyMessage(sendMessage, sign);

      console.log(verify, "in the server actions");
    }

    if (!existingUser) {
      return "wrong credentialas";
    }

    // Check is password matches
    const passValid = await compare(password, existingUser?.password as string);

    if (!passValid) {
      return "wrong credentialas";
    }

    // Creating session
    session.userId = existingUser._id.toString();
    session.username = existingUser.username;
    session.image = existingUser.image;
    session.email = existingUser.email;
    session.isPro = existingUser.isPro;
    session.role = existingUser.role;
    session.isLoggedIn = true;
    session.metaAccount = existingUser.metaAddress;

    await session.save();

    return "noice";
  } catch (error) {
    console.log(error);
    return "error: cant login";
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

// export async function HandleFormSubmit(price: any) {
//   try {
//     console.log("handle form", price);

//     const gg = new ethers.providers.Web3Provider(window.ethereum);

//     const signer = await gg.getSigner();

//     const basictranasction = await signer.sendTransaction({
//       value: ethers.utils.formatUnits(price, "wei"),
//       gasLimit: 900000,
//       to: "0x1C352E8F3e035c524F2385818b44859906d3c705",
//     });

//     await basictranasction.wait();

    

//   } catch (error) {
//     console.log(error);
//   }
// }

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

// Create a job request
export async function MakeARequest(formData: FormData) {
  const { email, description, minpay, title } = Object.fromEntries(formData);

  const user = await getSession();

  try {
    console.log("making a request");

    await dbConnect();

    const yon = new Job({
      title: title as string,
      description: description as string,
      author: user.userId,
      reward: minpay,
    });

    await yon.save();

    return "success";
  } catch (error) {
    console.log(error);
    return "fail";
  }
}

// grab all market request
export async function SingleJobRequest(jobID: string) {
  try {
    console.log("grabbing single job");

    await dbConnect();

    const singleJob = await Job.find({ _id: jobID }).lean();

    console.log(singleJob);

    return singleJob;
  } catch (error) {
    console.log("error");
  }
}

// handle user register
export const Registrar = async (
  state: string | undefined,
  formData: FormData
) => {
  try {
    const { username, email, password, metaAddress, sig } =
      Object.fromEntries(formData);

    await dbConnect();

    const UsrExist = await User.findOne({ username });

    if (UsrExist) {
      return "there is a user";
    }

    const P$P = await hash(password as string, 10);

    const newUser = new User({
      username,
      password: P$P,
      email,
      metaAddress: metaAddress as string | undefined,
      sig,
    });

    await newUser.save();

    return "noice";
  } catch (error) {
    console.log(error);

    return "notnoice";
  }
};

// Handle user new job request
export const handleNewJobRequest = async (userInput: FormData) => {
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
