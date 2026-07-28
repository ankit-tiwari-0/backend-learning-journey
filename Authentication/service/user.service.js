import bcrypt from "bcrypt"
import User from "../model/user.model.js";

export const registerUser = async(username , password)=>{
     
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = new User({username , password:hashedpassword})
    return await user.save()
}