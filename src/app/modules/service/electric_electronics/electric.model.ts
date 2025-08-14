import { Schema, model } from 'mongoose';

import { IElectric } from './electric.interface';



const ElectricModel = new Schema<IElectric>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  minPrice: { type: Number, required: true },
  maxPrice:{ type: Number, required: true },

}, {
  timestamps: true,
  versionKey:false,
  collection:'Electric_Electronics'
});

export default model<IElectric>('ElectricModel', ElectricModel);