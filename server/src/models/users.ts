import mongoose, { mongo } from "mongoose";

export interface IUSER {
    _Id?: string;
    username : string;
    password : string;
    email : string;
    amount : number;
    // purchasedItems : Number;
}

const userSchema = new mongoose.Schema({
    username : {
        type : String, required : true, unique : true
    },
    email : {
        type : String, required : true, unique : true
    },
    password : {
        type : String, required : true
    },
    amount : {
        type : Number, default : 5000
    },
    // purchasedItems : [{
    //     type : mongoose.Schema.Types.ObjectId
    // }]
})

const userModel = mongoose.model("user", userSchema);

export default userModel;