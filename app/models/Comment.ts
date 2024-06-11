import mongoose from "mongoose";
import { User } from "./User";
import { Blog } from "./Blog";

export interface IComment {
  content?: string;
  comment?: string;
  createdAt?: string;
  updatedAt?: string;
  featured?: boolean;
  views?: number;
  likes?: any;
  dislikes?: any;
  author?: any;
  blogPost?: any;
}

const CommentSchema = new mongoose.Schema<IComment>(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User, // Replace 'User' with the actual name of your User model
    },
    comment: {
      type: String,
      require,
    },
    blogPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Blog,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User, // Replace 'User' with the actual name of your User model
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User, // Replace 'User' with the actual name of your User model
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let CommentModel: mongoose.Model<IComment>;

try {
  // Try to retrieve an existing model
  CommentModel = mongoose.model<IComment>("Comment");
} catch (e) {
  // If the model doesn't exist, define it
  CommentModel = mongoose.model<IComment>("Comment", CommentSchema);
}

export const Comment = CommentModel;
 