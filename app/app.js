// ESM
import Fastify from 'fastify'
import mongoose from 'mongoose'
import { Routes } from './auth/route.js'
import jwt from 'jsonwebtoken';

const fastify = Fastify({logger: true})

//connecting to database
mongoose.connect('mongodb+srv://mbiswojit64:Biswo%40123@cluster0.tigyjkg.mongodb.net/').then(()=>{
  console.log('Database connected Successfully')
}).catch((err)=>{
  console.error('Error while connecting to database')
  process.exit(1);
})

//defining preHandler for extracting userID from Json Web Token
fastify.addHook('preHandler', async (request, reply) => {
  const authHeader = request.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {return;}
  try {
    const token = authHeader.replace("Bearer ", "");
    const decoded = jwt.verify(token, "PrivateKey")
    console.log("user", decoded);
    request.body.user = decoded.id;
    console.log(request.body.user);
  } catch (e) {console.error("JWT Verification Error:", e);}
});

//register route
fastify.register(Routes,{prefix:'/auth'});

// Running the server!
fastify.listen({ port: 3000,host:'localhost' }, function (err, address) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.info(`Server is now listening on ${address}`);
})
