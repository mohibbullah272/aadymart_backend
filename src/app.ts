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


app.get("/healthz", (req, res) => {
    res.send("ok");
  });
  
app.get('/',async(req:Request,res:Response)=>{
    res.send(`welcome to aady mart`)
})


app.use(globalErrorHandler);



export default app



