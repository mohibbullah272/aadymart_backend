import { Schema, model } from 'mongoose';
import { IArch } from './Arch.interface';



const ArchModel = new Schema<IArch>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  minPrice: { type: Number, required: true },
  maxPrice:{ type: Number, required: true },

}, {
  timestamps: true,
  versionKey:false,
  collection:'architectural_Design'
});

export default model<IArch>('ArchModel', ArchModel);