import { model, Schema } from "mongoose";


interface IUser{
    displayName?:string | null;
    email:string,
    role?:string
}
const UserSchema = new Schema<IUser>({
    displayName :{type:String},
    email:{type:String,required:true},
    role:{
        type:String,
        default:"User"
    }
},
{
    collection:'user',
    versionKey:false
})

const User =  model<IUser>("User",UserSchema)

export default User