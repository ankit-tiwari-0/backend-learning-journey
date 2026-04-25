//main work of this folder is to create server
const express = require("express")


const app = express()
app.use(express.json())

const notes = []

// crete notes API, title,  description
// By useing of POST method /notes

app.post('/notes', (req, res) =>{
    notes.push(req.body);
    res.status(201).json({
        message: "note create successfully"
    })
    
})

module.exports = app