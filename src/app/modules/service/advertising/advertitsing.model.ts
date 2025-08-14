import { Schema, model } from 'mongoose';
import { IAdd } from './advertising.interface';

const AddSchema = new Schema<IAdd>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true }
}, {
  timestamps: true,
  versionKey:false,
  collection:'advertising'
});

export default model<IAdd>('AddSchema', AddSchema);