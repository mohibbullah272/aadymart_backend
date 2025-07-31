import jwt, { SignOptions } from 'jsonwebtoken';

import { ILoginInput, IRegisterInput, IAuthResponse } from './auth.interface';
import User from '../user/user.model';

class AuthService {
  /**
   * Register a new user
   */
  async register(userData: IRegisterInput): Promise<IAuthResponse> {
    const { name, email, password } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        success: false,
        message: 'User already exists with this email'
      };
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password
    });

    // Generate JWT token
    const token = this.getSignedJwtToken(user._id as string);

    return {
      success: true,
      token,
      user: {
        id: user._id as string,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
  }

  /**
   * Login user
   */
  async login(loginData: ILoginInput): Promise<IAuthResponse> {
    const { email, password } = loginData;

    // Check if user exists
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return {
        success: false,
        message: 'Invalid credentials'
      };
    }

    // Check if password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return {
        success: false,
        message: 'Invalid credentials'
      };
    }

    // Generate JWT token
    const token = this.getSignedJwtToken(user._id as string);

    return {
      success: true,
      token,
      user: {
        id: user._id as string,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
  }

  /**
   * Get signed JWT token
   */
  private getSignedJwtToken(id: string): string {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRE;
  
    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }
  
    const options: SignOptions = {
      expiresIn: expiresIn as jwt.SignOptions['expiresIn'] || '1d'
    };
  
    return jwt.sign({ id }, secret, options);
  }
  
}

export default new AuthService();
