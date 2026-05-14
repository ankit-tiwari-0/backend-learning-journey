const mongoose = require('mongoose')




async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)

        console.log("chal rha hu main bhi");
        
    }catch(err){
        console.error("Database connection error:", err);
        
    }
}

module.exports = connectDB;