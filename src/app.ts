import { Application, Request, Response } from "express";
import express from 'express';
import cors from 'cors'
import globalErrorHandler from "./app/middlewares/error";

import authRoutes from "./app/modules/auth/auth.route";
import EventRouter from "./app/modules/service/event/eventRoute";
import WebRouter from "./app/modules/service/webDevelopement/web.route";
import ArchRouter from "./app/modules/service/architechturalDesign/ArchRoute";
import ElectricRouter from "./app/modules/service/electric_electronics/electric.route";

const app:Application = express()

app.use(cors(
    {
        origin:["https://www.aadymart.xyz","http://localhost:5173"],
        credentials:true
    }
))
app.use(express.json())
app.use('/api/event',EventRouter)
app.use('/api/auth', authRoutes);
app.use('/api/web-development',WebRouter)
app.use('/api/architectural-design',ArchRouter)
app.use('/api/electric-electronics',ElectricRouter)









app.get('/',async(req:Request,res:Response)=>{
    res.send(`welcome to aady mart`)
})


app.use(globalErrorHandler);



export default app



// Reusable compnents 

// I'll refactor this into a reusable, config-driven component system. Here's how we'll approach it:

// 1. First, let's create a services configuration file:
// typescript
// // servicesConfig.ts

//   // Add other services here following the same pattern
// };
// 2. Create a reusable ServiceForm component:
// typescript
// // ServiceForm.tsx
// 

// 3. Create a generic ServiceManager component:
// typescript
// // ServiceManager.tsx
// 
// 4. Finally, update your main component to use the ServiceManager:
// typescript
// // ManageService.tsx
// import React from 'react';
// import ServiceManager from './ServiceManager';

// interface ManageServiceProps {
//   serviceId: string;
// }

// const ManageService: React.FC<ManageServiceProps> = ({ serviceId }) => {
//   return <ServiceManager serviceId={serviceId} />;
// };

// export default ManageService;
// How to Use:
// To add a new service, simply add a new entry to the servicesConfig.ts file following the same pattern.

// To use the component for a specific service:

// typescript
// <ManageService serviceId="event-management" />
// Key Benefits:
// Complete Reusability: The same components work for all services

// Easy Configuration: Adding a new service only requires adding a config entry

// Consistent UI: All services will have the same look and feel

// Maintainable: Changes to the form or table UI only need to be made in one place

// Type Safety: TypeScript interfaces ensure type safety throughout

// The implementation preserves all your existing features like image upload, form validation, and responsive design while making the solution completely configurable.

// I have separate pages like this 

// const ManageWebDevelopment = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ManageWebDevelopment; 

// const ManageConsultancy = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ManageConsultancy; 

// const ManageArchDesign = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ManageArchDesign; can i use your those reusable code into this pages?
// Yes, absolutely! You can easily integrate the reusable components I provided into your individual service pages. Here's how you can do it for each of your pages:

// 1. First, make sure you have these files in your project:
// servicesConfig.ts (contains all service configurations)

// ServiceForm.tsx (the reusable form component)

// ServiceManager.tsx (the main reusable component)

// 2. Then update your individual pages to use the ServiceManager:
// typescript
// // ManageWebDevelopment.tsx
// import ServiceManager from '../components/ServiceManager';

// const ManageWebDevelopment = () => {
//     return <ServiceManager serviceId="web-development" />;
// };

// export default ManageWebDevelopment;
// typescript
// // ManageConsultancy.tsx
// import ServiceManager from '../components/ServiceManager';

// const ManageConsultancy = () => {
//     return <ServiceManager serviceId="consultancy" />;
// };

// export default ManageConsultancy;
// typescript
// // ManageArchDesign.tsx
// import ServiceManager from '../components/ServiceManager';

// const ManageArchDesign = () => {
//     return <ServiceManager serviceId="architectural-design" />;
// };

// export default ManageArchDesign;
// 3. Make sure you have the corresponding configurations in your servicesConfig.ts:
// typescript
// export const servicesConfig = {
//   // ... other services
//   'web-development': {
//     id: 'web-development',
//     name: 'Web Development',
//     icon: <Code className="w-5 h-5" />, // Make sure to import Code icon
//     apiEndpoint: '/api/web-development',
//     defaultValues: {
//       image: '',
//       title: '',
//       description: '',
//       technologies: [],
//       basePrice: 0
//     },
//     fields: [
//       // ... web development specific fields
//     ]
//   },
//   'consultancy': {
//     id: 'consultancy',
//     name: 'Consultancy',
//     icon: <Users className="w-5 h-5" />, // Make sure to import Users icon
//     apiEndpoint: '/api/consultancy',
//     defaultValues: {
//       image: '',
//       title: '',
//       description: '',
//       expertiseAreas: [],
//       hourlyRate: 0
//     },
//     fields: [
//       // ... consultancy specific fields
//     ]
//   },
//   'architectural-design': {
//     id: 'architectural-design',
//     name: 'Architectural Design',
//     icon: <Home className="w-5 h-5" />, // Make sure to import Home icon
//     apiEndpoint: '/api/architectural-design',
//     defaultValues: {
//       image: '',
//       title: '',
//       description: '',
//       designStyles: [],
//       minProjectSize: 0,
//       maxProjectSize: 0
//     },
//     fields: [
//       // ... architectural design specific fields
//     ]
//   }
// };
// Benefits of this approach:
// Consistent Implementation: All your service pages will work the same way

// Single Source of Truth: All configurations are in one place (servicesConfig.ts)

// Easy Maintenance: Changes to the form or table UI only need to be made in the ServiceManager component

// Customizable: Each service can have its own unique fields while using the same base component

// Type Safety: TypeScript ensures all your services follow the expected patterns

// If you need service-specific customizations:
// If some services need special handling that can't be configured through the config file, you have two options:

// Extend the ServiceManager:

// typescript
// // CustomServiceManager.tsx
// import ServiceManager from './ServiceManager';

// const CustomServiceManager = ({ serviceId, ...props }) => {
//   // Add custom logic here
//   return <ServiceManager serviceId={serviceId} {...props} />;
// };
// Use render props or children (more advanced):
// You could modify the ServiceManager to accept custom components for specific parts.

// Example with custom table columns:
// typescript
// // ManageWebDevelopment.tsx
// import ServiceManager from '../components/ServiceManager';

// const ManageWebDevelopment = () => {
//     return (
//         <ServiceManager 
//             serviceId="web-development"
//             customColumns={[
//                 {
//                     header: 'Technologies',
//                     render: (item) => (
//                         <div className="flex flex-wrap gap-1">
//                             {item.technologies.slice(0, 3).map(tech => (
//                                 <span key={tech} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
//                                     {tech}
//                                 </span>
//                             ))}
//                             {item.technologies.length > 3 && (
//                                 <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
//                                     +{item.technologies.length - 3} more
//                                 </span>
//                             )}
//                         </div>
//                     )
//                 }
//             ]}
//         />
//     );
// };

// export default ManageWebDevelopment;
// This approach gives you the perfect balance between reusability and customization while keeping your code DRY (Don't Repeat Yourself).

// New chat

