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

app.get('/get-server', async(req,res)=>{
    const datawa = await postModel.find()

    return res.status(200).json({
        message: "bsdk aa gya main server se bol",
        datawa
    })
})

app.delete('/delete/:id', async(req,res)=>{
    const deletepost = await postModel.findByIdAndDelete(
        req.params.id
    )
    return res.status(200).json({
        message: 'post deleted',
        deletepost
    })
})





module.exports = app;
