const mongoose = require("mongoose");

const postSChema = new mongoose.Schema({
    image: String,
    caption: String,
})


const postModel = mongoose.model("post", postSChema)


module.exports = postModel;