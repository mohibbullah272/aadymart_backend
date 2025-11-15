import { Request, Response } from "express";
import User from "../modules/auth/user.model";

const IsAdmin = async (req: Request, res: Response) => {
  const { email } = req.query;



    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isAdmin = user.role === "Admin";
   
    return res.json({ isAdmin });

};

export default IsAdmin;
