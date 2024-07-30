import mongoose, { Model, Document } from "mongoose";
import { User } from "./User";

interface ITransaction extends Document {
  user: any;
  transactionsignature: string;
  transactionHash: string;
  homeAddress: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  total: Number;
} 

const TransactionSchema = new mongoose.Schema<ITransaction>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    total: {
      type: Number
    },
    
    transactionsignature: {
      type: String,
    },
    transactionHash: {
      type: String,
    },
    homeAddress: {
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
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

let TransactionModel: Model<ITransaction>;

try {
  // Try to retrieve an existing model
  TransactionModel = mongoose.model<ITransaction>("Transaction");
} catch (e) {
  // If the model doesn't exist, define it
  TransactionModel = mongoose.model<ITransaction>(
    "Transaction",
    TransactionSchema
  );
}

export const Transaction = TransactionModel;
