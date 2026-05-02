const mongoose = require('mongoose');



async function connecteddb(){
    await mongoose.connect("mongodb+srv://project1:k7u8E3BqsgEVxKm0@project1.76gobsb.mongodb.net/project-1")
    console.log("Connected to DB");
    
}


module.exports = connecteddb;