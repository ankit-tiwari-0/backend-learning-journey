const mongoose = require('mongoose')

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log('Database connected successfully');
        
    }catch(error){
        console.log('Database error', error);
        
    }
}

module.exports = connectDB;