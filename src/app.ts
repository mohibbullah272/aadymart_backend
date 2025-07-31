import { Application, Request, Response } from "express";
import express from 'express';
import cors from 'cors'
import globalErrorHandler from "./app/middlewares/error";
import ServiceRouter from "./app/modules/service/service.route";
import authRoutes from "./app/modules/auth/auth.route";

const app:Application = express()

app.use(cors(
    {
        origin:["https://www.aadymart.xyz","http://localhost:5173"],
        credentials:true
    }
))
app.use(express.json())
app.use('/api/services', ServiceRouter);
app.use('/api/auth', authRoutes);


app.get('/',async(req:Request,res:Response)=>{
    res.send(`welcome to aady mart`)
})


app.use(globalErrorHandler);



export default app