import bcrypt from "bcrypt"
import User from "../model/user.model.js";

export const registerUser = async(username , password)=>{
     
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = new User({username , password:hashedpassword})
    return await user.save()
}


export const loginUser = async(username , password)=>{
    const user = await User.findOne({username});

    if(!user || !(await bcrypt.compare(password , user.password))){
        throw new Error("Invalid Username or password")
    }

    return user

}

