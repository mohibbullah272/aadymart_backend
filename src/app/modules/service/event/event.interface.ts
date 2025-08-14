import { Document } from 'mongoose';

export interface IEvent extends Document {
  image: string;
  title: string;
  description: string;
  features: string[];
  minPrice: number;
  maxPrice: number;
}

export interface IEventCreate {
  image: string;
  title: string;
  description: string;
  features: string[];
  minPrice: number;
  maxPrice: number;
}

export interface IEventUpdate {
  image?: string;
  title?: string;
  description?: string;
  features?: string[];
  minPrice?: number;
  maxPrice?: number;
}