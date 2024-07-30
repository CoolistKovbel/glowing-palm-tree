import mongoose from "mongoose";

export interface IRewquest {
  email: string;
  title: string;
  description: string;
}

const RewquestSchema = new mongoose.Schema<IRewquest>(
  {
    email: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

let RewquestModel: mongoose.Model<IRewquest>;

try {
  // Try to retrieve an existing model
  RewquestModel = mongoose.model<IRewquest>("Rewquest");
} catch (e) {
  // If the model doesn't exist, define it
  RewquestModel = mongoose.model<IRewquest>("Rewquest", RewquestSchema);
}

export const Rewquest = RewquestModel;
