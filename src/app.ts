import { Application, Request, Response } from "express";
import express from 'express';
import cors from 'cors'
import globalErrorHandler from "./app/middlewares/error";
import { UserRoute } from "./app/modules/auth/auth.route";
import EventRouter from "./app/modules/service/event/eventRoute";
import WebRouter from "./app/modules/service/webDevelopement/web.route";
import ArchRouter from "./app/modules/service/architechturalDesign/ArchRoute";
import ElectricRouter from "./app/modules/service/electric_electronics/electric.route";
import AdRoute from "./app/modules/service/advertising/advertising.route";
import officeRoute from "./app/modules/service/OfficeStationery/office.route";
import TravelRoute from "./app/modules/service/Travel/travel.route";
import CarRoute from "./app/modules/service/CarRent/car.route";
import NotaryRoute from "./app/modules/service/NotaryPublic/Notary.route";
import ConsultancyRoute from "./app/modules/service/Consultancy/consultancy.route";
import nodeMailer from 'nodemailer';
import ITRoute from "./app/modules/service/IT/IT.route";
import BlogRoute from "./app/modules/blog/blog.route";



const app:Application = express()

app.use(cors(
    {
        origin:["https://www.aadymart.xyz","http://localhost:5173"],
        credentials:true
    }
))
app.use(express.json())
app.use('/api/event',EventRouter)
app.use('/api/web-development',WebRouter)
app.use('/api/architectural-design',ArchRouter)
app.use('/api/electric-electronics',ElectricRouter)
app.use('/api/advertising',AdRoute)
app.use('/api/office-stationery',officeRoute)
app.use('/api/tour-travel',TravelRoute)
app.use('/api/car-rent',CarRoute)
app.use('/api/notary-public',NotaryRoute)
app.use('/api/consultancy',ConsultancyRoute)
app.use('/api/user',UserRoute) 
app.use('/api/IT',ITRoute)
app.use("/api/blogs",BlogRoute)








interface IMail {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  // Nodemailer transporter (Gmail)
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: 'aadymart@gmail.com',
      pass: 'getc rbwk flou mkby',
    },
  });
  
  app.post("/api/send", async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;
  
    const mailInfo: IMail = {
      name,
      email,
      subject,
      message,
    };
  
    try {
      const result = await transporter.sendMail({
        from: email, // Gmail account
        to: "aadymart@gmail.com", // receiver
        subject: mailInfo.subject,
        text: `From: ${mailInfo.email}\n\n${mailInfo.message}`,
      });
  
      console.log(result);
      res.json({ success: true, result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error });
    }
  });
app.get("/healthz", (req:Request,res:Response) => {
    res.send("ok");
  });
  
app.get('/',async(req:Request,res:Response)=>{
    res.send(`welcome to aady mart`)
})


app.use(globalErrorHandler);



export default app



