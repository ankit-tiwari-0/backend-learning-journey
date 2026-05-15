const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken")

async function registerUser(req, res) {
    

    const { username, email, password} = req.body;

    const isUserExist = await userModel.findOne({
        email
    })

    if(isUserExist){
        return res.status(409)({
            message: "User already exists"
        })
    }

    const user = await userModel.create({
        username, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("tokanwa", token)

    res.status(201).json({
        message: 'User register successfully',
        user,
        token
    })
}

async function getUsers(req, res) {
 const users = await userModel.find()

  res.json({
    users
  })
}

module.exports = { registerUser, getUsers }