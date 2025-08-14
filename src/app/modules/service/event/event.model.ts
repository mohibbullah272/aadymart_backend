import { Schema, model } from 'mongoose';
import { IEvent } from './event.interface';

const EventSchema = new Schema<IEvent>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true }
}, {
  timestamps: true,
  versionKey:false
});

export default model<IEvent>('Event', EventSchema);