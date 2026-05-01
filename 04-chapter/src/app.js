const express = require('express')
const noteModel = require("./models/note.model")


const app = express();
app.use(express.json());



app.post("/notes",async (req, res) =>{
    const data = req.body
   await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created"
    })
})

app.get("/notes",async (req, res) =>{
    const note = await noteModel.find();

    /*
    two way to find 
    find => u always get [] if there is  value then [{}],
    findone => if get data then {} not then null
    */

    res.status(200).json({
    message: "Notes fetched Successfully",
    note: note
   })
} )

app.delete("/notes/:id", async (req, res) =>{
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "note Deleted successfully"
    })
})

  
module.exports = app