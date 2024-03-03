import bcrypt from "bcrypt";


import { User } from "../models/users.js";
import wrapper from "../helpers/wrapper.js";
import HttpError from "../helpers/HttpError.js";


const register = async(req, res) => {
    const { email } = req.body
    const user = await User.findOne({email})

    if(user){
        throw HttpError(409, "Email already in use");
    }

    const newUser = await User.create(req.body)

    res.status(201).json({
        email: newUser.email,
        name: newUser.name,
    })
 
 
}

export default {
    register: wrapper(register),
  
  } 