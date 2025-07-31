
import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export interface IUserInput {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export interface IUserUpdateInput {
  name?: string;
  email?: string;
  password?: string;
  role?: UserRole;
}

