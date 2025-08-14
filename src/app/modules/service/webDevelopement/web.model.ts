import { Schema, model } from 'mongoose';
import { IWeb } from './web.interface';


const WebModel = new Schema<IWeb>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  basePrice: { type: Number, required: true },

}, {
  timestamps: true,
  versionKey:false,
  collection:'web_development'
});

export default model<IWeb>('WebModel', WebModel);