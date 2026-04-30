const mongoose = require("mongoose");

async function connectdb(){
    await mongoose.connect("mongodb+srv://first:iqszacnsEB2Aoc6Z@firstcluster.tivhulr.mongodb.net/halley")

    console.log("Connected to db");
    
}

module.exports = connectdb
