import { Response } from 'express';

interface ApiResponse {
  success: boolean;
  data?: any;
  message?: string;
}

class ApiResponse {
  static success(
    res: Response,
    data: any = null,
    statusCode: number = 200,
    message: string = 'Success'
  ) {
    res.status(statusCode).json({
      success: true,
      data,
      message
    });
  }

  static error(
    res: Response,
    message: string = 'Internal Server Error',
    statusCode: number = 500,
    errors: any = null
  ) {
    res.status(statusCode).json({
      success: false,
      message,
      errors
    });
  }

  static notFound(res: Response, message: string = 'Resource not found') {
    res.status(404).json({
      success: false,
      message
    });
  }

  static unauthorized(res: Response, message: string = 'Unauthorized') {
    res.status(401).json({
      success: false,
      message
    });
  }
}

export default ApiResponse;