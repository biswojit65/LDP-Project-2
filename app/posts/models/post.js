import mongoose from "mongoose";
const Schema= mongoose.Schema;

//defining schema for "post" database
const PostSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
       type:String,
       require:true
    },
    body:{
       type:String
    },
    likes:[{
        type:Schema.Types.ObjectId,
        ref:'Like'
    }],
    comments:[{
        type:Schema.Types.ObjectId,
        ref:'Comment'
    }]
},{timestamps:true})

const Post=mongoose.model('PostSchema',PostSchema);
export default Post;