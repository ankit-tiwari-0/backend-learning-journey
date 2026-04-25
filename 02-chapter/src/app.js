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

  //GET /notes

  app.get('/notes', (req, res) =>{
   
     res.status(200).json({
         message: "notes fectch successfully",
         notes: notes
     })
      
  })


app.delete('/notes/:index', (req, res) => {
  const indx = req.params.index;

  delete notes[indx];

  res.status(200).json({
    message: "note deleted successfully"
  });
});  



module.exports = app