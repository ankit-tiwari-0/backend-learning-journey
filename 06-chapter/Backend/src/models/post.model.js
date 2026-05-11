const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true
    },

    caption: {
        type: String,
        required: true
    },

    category: {
        type: String,
        default: "All"
    },

    likes: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
})

const postModel = mongoose.model("Post", postSchema)

module.exports = postModel;