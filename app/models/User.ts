import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  image: string;
  role: string;
  isPro: boolean;
  metaAddress: string;
  sig: string;
  earned: number | string;
  address: any;
  Address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

// TODO: Make it better......

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      min: 4,
      max: 24,
    },
    email: {
      type: String,
    },
    Address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    phone: {
      type: String,
    },
    image: {
      type: String,
    },
    metaAddress: {
      type: String || null,
    },
    sig: {
      type: String || null,
      unique: true,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN", "CAPTAIN"],
    },
    isPro: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUser>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>("User", UserSchema);
}

export const User = UserModel;
