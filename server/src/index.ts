import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./routes/userRoutes";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', userRouter);

mongoose.connect("mongodb+srv://parasjainreal:hQ9LuDDrWN2GnjQz@cluster0.lpeq20l.mongodb.net/")
    .then(()=>{
        console.log("mongoDB connected");
        app.listen(3001, ()=>console.log("Server Started on http://localhost:3001"))
    })
    .catch((err)=>console.log(err));



