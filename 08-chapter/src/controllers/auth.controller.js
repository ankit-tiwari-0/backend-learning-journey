const userModule = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")

async function registerUser(req, res) {
            
    const {username, email, password, role = "user"} = req.body;

    const isUserAlready = await userModule.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if (isUserAlready) {
        return res.status(409).json({message: "User already exist"})
    }

   const hash = await bcrypt.hash(password, 10)

    const user = await userModule.create({

        username,
        email,
        password: hash,
        role
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT)

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered",
        user:{
            id: user._id,
            userName: user.username,
            email: user.email,
            role: user.role
        }
    })
}

async function loginUser(req, res) {
    const {username, email, password} = req.body;

    const user = await userModule.findOne({
      $or: [
        { username},
        { email}
      ]
    })
    if (!user) {
        return res.status(401).json({ message: "Invalid credentialx"})
    }

  const token = jwt.sign({
    id: user._id,
    role: user.role,
}, process.env.JWT);

res.cookie("token", token);

res.status(200).json({
    message: "User logged in successfully",
    user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
    }
});
}



module.exports = {registerUser, loginUser};