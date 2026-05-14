const mongoose = require('mongoose')


const userSChema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

const userModel = mongoose.model("user", userSChema)

module.exports = userModel;