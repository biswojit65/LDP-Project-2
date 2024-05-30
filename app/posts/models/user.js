import mongoose from "mongoose";
const Schema= mongoose.Schema;

//defining schema for "user" database
const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    fullname:String,
    posts:[{
        type:Schema.Types.ObjectId,
        ref:"Post"
    }],
    likes:[{
        type:Schema.Types.ObjectId,
        ref:"Like"
    }],
    comments:[{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    }]    
},{timestamps:true});

const User=mongoose.model('UserSchema',UserSchema);
export default User;