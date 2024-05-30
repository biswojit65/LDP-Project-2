import mongoose from "mongoose";
const Schema= mongoose.Schema;

//defining schema for "comment" database
const CommentSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    comment:{
        type:String,
        required:true
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post"
    }
},{timestamps:true});

const Comment=mongoose.model('CommentSchema',CommentSchema);
export default Comment;