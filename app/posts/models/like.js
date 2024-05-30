import mongoose from "mongoose";
const Schema= mongoose.Schema;

//defining schema for "like" database
const LikeSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    like:{
        type:String,
        required:true
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post"
    }
},{timestamps:true});

const Like=mongoose.model('LikeSchema',LikeSchema);
export default Like;