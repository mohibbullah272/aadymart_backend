import { Document } from 'mongoose';

export interface IService extends Document {
  name: string;
  description: string;
  category: ServiceCategory;
  duration: string;
  isActive: boolean;
  features: string[];
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export enum ServiceCategory {
  EVENT_MANAGEMENT = 'event_management',
  NOTARY_PUBLIC = 'notary_public',
  BUSINESS_CONSULTANCY = 'business_consultancy',
  CAR_RENT = 'car_rent',
  ELECTRICAL_ELECTRONIC = 'electrical_electronic',
  WEB_DEVELOPMENT = 'web_development',
  ARCHITECTURAL_DESIGNING = 'architectural_designing',
  OFFICE_STATIONERY = 'office_stationery',
  ADVERTISING = 'advertising',
  OTHER = 'other'
}

export interface IServiceInput {
  name: string;
  description: string;
  category: ServiceCategory;
  duration: string;
  features: string[];
  images?: string[];
}

export interface IServiceUpdateInput {
  name?: string;
  description?: string;
  category?: ServiceCategory;
  duration?: string;
  isActive?: boolean;
  features?: string[];
  images?: string[];
}

export interface IServiceQuery {
  category?: ServiceCategory;
  isActive?: boolean;
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
}