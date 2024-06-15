import mongoose from "mongoose";
import { User } from "./User";

export interface ICheckout {
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  author?: any;
  amount?: any;
  product?: any;
}

const CheckoutSchema = new mongoose.Schema<ICheckout>(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User, // Replace 'User' with the actual name of your User model
    },
    amount: {
      type: Number,
    },
    product: {
      type: String,
      default: "BASIC",
    },
  },
  { timestamps: true }
);

let CheckoutModel: mongoose.Model<ICheckout>;

try {
  // Try to retrieve an existing model
  CheckoutModel = mongoose.model<ICheckout>("Checkout");
} catch (e) {
  // If the model doesn't exist, define it
  CheckoutModel = mongoose.model<ICheckout>("Checkout", CheckoutSchema);
}

export const Checkout = CheckoutModel;
