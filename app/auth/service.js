import User from "../posts/models/user.js";
import Post from "../posts/models/post.js";
import Like from "../posts/models/like.js";
import Comment from "../posts/models/comment.js";
import bcrypt from 'bcrypt'

//Defining various database services
export const Services ={
    findByEmail : async(email)=>{
        return await User.findOne({email})
    },
    findByUserName : async(username)=>{
        return await User.findOne({username})
    },
    findByUserID : async(userID)=>{
        return await User.findOne({_id:userID})
    },
    findPostByPostID : async(postID)=>{
        return await Post.findOne({_id:postID})
    },
    create: async(data)=>{
        data.password=bcrypt.hashSync(data.password,10);
        return await User.create(data);
    },
    createPost: async(data)=>{
        return await Post.create(data);
    },
    createLike: async(data)=>{
        return await Like.create(data);
    },
    createComment: async(data)=>{
        return await Comment.create(data);
    },
    pushPostToUser: async(userId,postID)=>{
        return await User.updateOne({_id:userId},{$push:{posts:postID}});
    },
    pushLikeToUser: async(userId,likeID)=>{
        return await User.updateOne({_id:userId},{$push:{likes:likeID}});
    },
    pushLikeToPost: async(postId,likeID)=>{
        return await Post.updateOne({_id:postId},{$push:{likes:likeID}});
    },
    pushCommentToUser: async(userId,likeID)=>{
        return await User.updateOne({_id:userId},{$push:{comments:likeID}});
    },
    pushCommentToPost: async(postId,likeID)=>{
        return await Post.updateOne({_id:postId},{$push:{comments:likeID}});
    },
    isUsernameExists : async(username)=>{
        return await  User.exists({username});
    },
    isEmailExists : async(email)=>{
        return await User.exists(email);
    },
    comparePassword : async(userPassword,password)=>{
        const isCompared = await bcrypt.compare(userPassword,password);
        return isCompared;
    }   
}