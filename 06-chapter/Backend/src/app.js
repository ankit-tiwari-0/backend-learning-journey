const express = require('express');
const postModel = require('./models/post.model')
const multer = require("multer");
const uploadFile = require('./services/storage');

const app = express();
app.use(express.json());


const uploadd = multer({storage:multer.memoryStorage()});

app.post('/add-post', uploadd.single("image"), async (req,res)=>{

     const result = await uploadFile(
            req.file.buffer
        );
        console.log(result.url)
     const newPost = await postModel.create({
        image: result.url,

       caption: req.body.caption,

       category: req.body.category

     })
     res.status(201).json({
        message: "post-created",
        data: newPost
     })
})







module.exports = app;
