const mongoose = require('mongoose')


const userSChema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
})

const userModel = mongoose.model("user", userSChema)

module.exports = userModel;