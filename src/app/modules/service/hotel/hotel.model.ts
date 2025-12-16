import { Schema, model } from 'mongoose';
import { IAdd } from '../advertising/advertising.interface';

const hotelSchema = new Schema<IAdd>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true }
}, {
  timestamps: true,
  versionKey:false,
  collection:'hotel_resort'
});

export const Hotel = model<IAdd>('Hotel', hotelSchema);