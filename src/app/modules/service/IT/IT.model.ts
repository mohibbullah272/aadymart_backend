import { Schema, model } from 'mongoose';
import { IT } from './IT.interface';


const ITSchema = new Schema<IT>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true }
}, {
  timestamps: true,
  versionKey:false,
  collection:'IT'
});

export default model<IT>('IT', ITSchema);
