import { User } from "../models/users.js";
import wrapper from "../helpers/wrapper.js";
import HttpError from "../helpers/HttpError.js";

const register = async(req, res) => {
    const newUser = await User.create(req.body)

    res.json({
        email: newUser.email,
        name: newUser.name,
    })


}

export default {
    register: wrapper(register),
  
  } 