import { Schema, model } from 'mongoose';
import { IAdd } from '../advertising/advertising.interface';

const ConsultancySchema = new Schema<IAdd>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true }
}, {
  timestamps: true,
  versionKey:false,
  collection:'Consultancy'
});

export default model<IAdd>('Consultancy', ConsultancySchema);