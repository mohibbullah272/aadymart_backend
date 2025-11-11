import { Document } from 'mongoose';

export interface IT extends Document {
  image: string;
  title: string;
  description: string;
  features: string[];
  minPrice: number;
  maxPrice: number;
}



export interface ITUpdate {
  image?: string;
  title?: string;
  description?: string;
  features?: string[];
  minPrice?: number;
  maxPrice?: number;
}
