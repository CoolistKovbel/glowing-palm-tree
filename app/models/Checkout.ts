import mongoose from "mongoose";
import { User } from "./User";

export interface ICheckout {
  customer?: any;
  amount?: any;
  product?: any;
  pendingShipping?: any;
  description?: any;
}

const CheckoutSchema = new mongoose.Schema<ICheckout>(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    amount: {
      type: Number,
    },
    pendingShipping: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "Ezuaid supplies"
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
