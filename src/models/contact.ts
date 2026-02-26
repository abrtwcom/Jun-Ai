import { Document, model, models, Schema } from 'mongoose';

export interface IContact extends Document {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  isResolved: boolean;
}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
      required: [true, 'Name is required'],
      trim:  true,
    },
    email: {
      type: String,
      required: true,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Please provide a valid email address'],
    },
    message: {
      type: String,
      required: true,
      required: [true, 'Message is required'],
      trim: true,
    },
    isResolved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = models.Contact || model<IContact>('Contact', contactSchema);
