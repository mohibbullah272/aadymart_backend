import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";



const blogSchema = new Schema<IBlog>({

title:{
    type:String,
    required:true,
    trim:true
},
content:{
    type:String,
    required:true
},
image:{
    type:[String],
    required:true
},

},
{
    collection:"blogs",
    versionKey:false,
    timestamps:true
})



const blog =  model<IBlog>("Blog",blogSchema)

export default blog