import { Request, Response } from "express";
import User from "./user.model";





const userInfo =async(req:Request,res:Response)=>{
  try {
    const result = await User.find()
    res.json({
      message:"user get successful",
      data:result
    })
  } catch (error) {
    console.log(error)
  }


}
const createUser = async(req:Request,res:Response)=>{
const userData = req.body 
const email = userData.email

try {
  const isUserExist = await User.findOne({email})
  if(isUserExist){
    return res.send('user already exist')
  }
  const result = await User.create(userData)
  res.json({
    message:"user created successfully",
    data:result
  })
} catch (error:any) {
  console.log(error)
  res.status(500).json({
    success:false,
    message:error?.message,
    data:null
  })
  
}


}

export  const userController ={
  createUser,
  userInfo
}