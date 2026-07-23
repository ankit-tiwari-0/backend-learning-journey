import mongoose from 'mongoose'


const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE)
        console.log("CHAL RHA HAI ");
        
    } catch (error) {
        console.log("ERROR" ,  error.message);
        process.exit(1)
    }
}


export default connectDB