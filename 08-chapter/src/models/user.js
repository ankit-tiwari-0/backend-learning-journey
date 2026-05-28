const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        required:true
    },
    role: {
        type: String,
        enum: ['user', 'artist'],
        default: 'user'
    }
})

const userModule = mongoose.model("user", userSchema)

module.exports = userModule;