import { Services  } from "./service.js"
import jwt  from "jsonwebtoken";

export const Controller ={
    //Registering user
    register : async(req,res)=>{
        try{
           if(await Services.findByEmail(req.body.email) && await Services.findByUserName(req.body.email)){
            res.code(400);
            return {
                message:  "Username or Email  Exist"
            }
           }
           const user=await Services.create(req.body);
           return {
            message:  "User registration Successful",
            data:{user}
          }
        }catch(err){
           res.code(500);
           return {err};
        }
    },
    //Login user
    login: async(req,res)=>{
        try{
           const user=await Services.findByUserName(req.body.username);
           if(!user){
            res.code(400)
            return {
                message : "Username is incorrect",    
            }
           }
           const isSame=await Services.comparePassword(req.body.password, user.password);
           if(!isSame){
            console.log(user.password);
            console.log(req.body.password);
            res.code(400)
            return {
                message : "Login Details are incorrect",    
            }
           }
           const token=jwt.sign({id:user._id},'PrivateKey');
           res.code(200);
           return{
                message : "Successfully Logged in",
                data : {
                    user,token
                }
           }
        }catch(err){
           res.code(500);
           return {err};
        }
    },
    //saving post data to database
    postHandler :async(req,res)=>{
        try{
           const user=await Services.findByUserID(req.body.user);
           const post=await Services.createPost(req.body);
           const pushPost=await Services.pushPostToUser(user._id,post._id);
           res.code(200);
           return{
                message : "Your Post Successfully Posted",
                data : {
                    pushPost
                }
           }
        }catch(err){
           res.code(500);
           return {err};
        }

    },
    //saving likes data to database
    likeHandler :async(req,res)=>{
        try{
            console.log(req.body);
            const user=await Services.findByUserID(req.body.user);
            console.log(user);
            const post=await Services.findPostByPostID(req.body.post);
            console.log(post);
            const like=await Services.createLike(req.body);
            console.log(like);
            const pushUser=await Services.pushLikeToUser(user._id,like._id);
            const pushPost=await Services.pushLikeToPost(post._id,like._id);
            res.code(200);
            return{
                 message : " Like Successfully Stored",
                 data : {
                     pushPost
                 }
            }
         }catch(err){
            res.code(500);
            return {err};
         }
    },
    //saving comment data to database
    commentHandler :async(req,res)=>{
        try{
            
            const user=await Services.findByUserID(req.body.user);
            const post=await Services.findPostByPostID(req.body.post);
            const comment=await Services.createComment(req.body);
            console.log(comment);
            const pushUser=await Services.pushCommentToUser(user._id,comment._id);
            const pushPost=await Services.pushCommentToPost(post._id,comment._id);
            res.code(200);
            return{
                 message : " Comment Successfully Stored",
                 data : {
                     pushPost
                 }
            }
         }catch(err){
            res.code(500);
            return {err};
         }
    }
    
}