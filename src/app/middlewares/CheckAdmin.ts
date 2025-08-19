import { NextFunction, Request, Response } from "express";
import User from "../modules/auth/user.model";

const CheckAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });

    if (!user ) {
      return res.status(403).json({ message: "user not found" });
    }
    if(user.role !== "Admin"){
        return res.status(403).json({ message: "Unauthorized access" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default CheckAdmin;


