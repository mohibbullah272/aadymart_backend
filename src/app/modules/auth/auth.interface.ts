export interface ILoginInput {
    email: string;
    password: string;
  }
  
  export interface IRegisterInput {
    name: string;
    email: string;
    password: string;
  }
  
  export interface IAuthResponse {
    success: boolean;
    token?: string;
    user?: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
    message?: string;
  }
  