import { Controller } from "./controller.js";

//Defining routes for differnt actions
export const Routes= async(fastify,_opts)=>{
    fastify.post('/register',Controller.register);
    fastify.post('/login',Controller.login);
    fastify.post('/post',Controller.postHandler);
    fastify.post('/like',Controller.likeHandler);
    fastify.post('/comment',Controller.commentHandler);
}