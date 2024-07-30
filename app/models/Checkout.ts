import mongoose from "mongoose";
import { User } from "./User";

export interface ICheckout {
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  customer?: any;
  amount?: any;
  product?: any;
  pendingShipping?: any;
  signature?: any;
  description?: any;
  metaAddress?: any;
  transacationHash?: any;
}

const CheckoutSchema = new mongoose.Schema<ICheckout>(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User, // Replace 'User' with the actual name of your User model
    },
    amount: {
      type: Number,
    },
    metaAddress: {
      type: String,
    },
    transacationHash: {
      type: String,
    },
    pendingShipping: {
      type: Boolean,
      default: false,
    },
    signature: {
      type: String,
    },
    description: {
      type: String,
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
