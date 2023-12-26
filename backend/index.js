import express from "express";
import { port,mongoUrl } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app=express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
  console.log(req);
  return res.status(234).send('hello');
})

app.use('/books',booksRoute)

mongoose.connect(mongoUrl)
.then(()=>{
  console.log('app connected to database mongo yeahhhh');
  app.listen(port,()=>{console.log(`app running on ${port}`)})
  })
  .catch((err)=>{
    console.log(err);
  })