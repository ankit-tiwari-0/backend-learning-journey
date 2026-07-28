import { registerUser } from "../service/user.service.js";


export const signup = async (req , res)=>{
    const {username, password} = req.body;

    try {
        const user = await registerUser(username, password);
        res.status(201).json({
            success: true,
            messsage: "user register successfull",
            data:user
        })
    } catch (error) {
     res.status(500).json({
        success: false,
        messsage: "errorr",
        error: error.messsage
     })   
    }
}

export const login = ()=>{

}

export const logout = ()=>{

}