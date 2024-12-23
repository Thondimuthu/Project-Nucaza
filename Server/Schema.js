import { Schema,model } from "mongoose";


const userSchema =new Schema({
    First_name:{
        type:String,
        require:true
    },
    Last_name:{
        type:String,
        require:true
    },
    Email_Id:{
        type:String,
        require:true
    },
    Mobile_number:{
        type:Number,
        require:true
    },
    DataOfBirth:{
        type:Date,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    Marital_status:{
        type:String,
        require:true
    }
})
const UserModel=model('Login-Data',userSchema)

export default UserModel