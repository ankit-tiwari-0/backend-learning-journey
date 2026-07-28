import { loginUser, registerUser } from "../service/user.service.js";


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
        console.log(error);
        
     res.status(500).json({
        success: false,
        messsage: "errorr",
        error: error.messsage
     })   
    }
}

export const login = async(req , res)=>{
    const {username , password} = req.body;

    try {
        const user = await loginUser(username , password);

    // Save user id in session
    req.session.userId = user._id;
    res.status(200).json({
        success:true,
        message:"Login Successfull"
    })
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            success:false,
            message:"error Logging in",
            error:error.message
        })
    }
}


export const logout = ()=>{

}