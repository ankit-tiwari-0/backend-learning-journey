const express = require("express")

const app = express()
app.use(express.json());

const notess = []

app.post('/notess', (req, res) =>{
    console.log(req.body);

    notess.push(req.body);
    res.status(201).json({
        message:"note created"
    })
})

app.get('/notess', (req, res) => {


    res.status(200).json({
            message:"feched sucessfully",
            note: notess
    })
     
})

app.delete('/notess/:index', (req, res) => {
    const indx = req.params.index;

    delete notess[indx]

    res.status(200).json({
       message: "Deleted"
    })
})
module.exports = app 