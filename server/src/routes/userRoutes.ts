import express, { NextFunction, Request, Response } from "express";
import userModel, { IUSER } from "../models/users";
import { userErrors } from "../errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req : Request, res : Response) =>{
    const {username, email, password} = req.body;
    try{
        const user = await userModel.findOne({username : username, email : email});
        if(user) return res.status(400).json({
            success : false,
            message : userErrors.User_ALREADY_EXISTS
        });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            username,
            email,
            password : hashedPassword
        });
        res.json({
            success : true,
            message : "User Created successfully"
        });
    }catch(err : any){
        res.status(500).json({
            success : false,
            message : err.message
        });
    }
    
})

router.post('/login',async (req : Request, res : Response) => {
    const{username, password} = req.body;
    try{
        const thisUser: IUSER | null = await userModel.findOne({ username }).lean();
        if(!thisUser) return res.status(400).json({
            success : false,
            message : userErrors.NO_USER_FOUND
        })
        const isPasswordValid = await bcrypt.compare(password, thisUser.password);
        if(!isPasswordValid) return res.status(400).json({
            success : false,
            message : userErrors.WRONG_CREDENTIALS
        });
        const token = await jwt.sign({id : thisUser._Id}, 'Secret');
        res.json({
            success : true,
            token : token,
            username : thisUser.username
        })
    }catch(err : any){
        res.status(500).json({
            success : false,
            message : err.message
        })
    }
})

export const verifyJWT = (req : Request, res : Response, next : NextFunction)=>{
    const token  = req.headers.JWTauthorization as string;
    if(token){
        try {
            jwt.verify(token, 'Secret', (err, decoded)=>{
                if(err){
                    return res.sendStatus(403);
                }
                next();
            });
        } catch (err : any) {
            res.status(500).json({
                success : false,
                message : err.message
            })
        }
    }
    return res.sendStatus(401);
}


export {router as userRouter};
