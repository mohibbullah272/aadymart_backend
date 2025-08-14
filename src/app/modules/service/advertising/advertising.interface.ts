import { Document } from 'mongoose';

export interface IAdd extends Document {
  image: string;
  title: string;
  description: string;
  features: string[];
  minPrice: number;
  maxPrice: number;
}



export interface IAddUpdate {
  image?: string;
  title?: string;
  description?: string;
  features?: string[];
  minPrice?: number;
  maxPrice?: number;
}