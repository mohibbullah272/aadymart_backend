import { Request, Response } from "express";
import User from "./user.model";

const userInfo = async (req: Request, res: Response) => {
    try {
       
      const result = await User.find().sort({ role: 1, email: 1 }); 
      // Sort by role and email

        res.json({
            success: true,
            message: "Users fetched successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
            data: null
        });
    }
};

const createUser = async (req: Request, res: Response) => {
    const userData = req.body;
    const email = userData.email;

    try {
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
                data: null
            });
        }
        const result = await User.create(userData);
        res.json({
            success: true,
            message: "User created successfully",
            data: result
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error?.message,
            data: null
        });
    }
};

// Make user admin
const makeAdmin = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
      
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null
            });
        }
 
        if (user.role === "Admin") {
            return res.status(400).json({
                success: false,
                message: "User is already an admin",
                data: null
            });
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { role: "Admin" },
            { new: true }
        );

        res.json({
            success: true,
            message: "User promoted to admin successfully",
            data: updatedUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to make user admin",
            data: null
        });
    }
};

// Remove admin role
const removeAdmin = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null
            });
        }

        if (user.role === "User") {
            return res.status(400).json({
                success: false,
                message: "User is not an admin",
                data: null
            });
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { role: "User" },
            { new: true }
        );

        res.json({
            success: true,
            message: "Admin role removed successfully",
            data: updatedUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to remove admin role",
            data: null
        });
    }
};

export const userController = {
    createUser,
    userInfo,
    makeAdmin,
    removeAdmin
};