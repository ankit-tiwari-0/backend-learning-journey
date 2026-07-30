import mongoose, { model } from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
    username:{type: String, required: true, unique: true},
    password:{type: String, required:true}
})

//hash password before

userSchema.pre("save", async function (next) {
    if(this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 100)
    next()
})



userSchema.method.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

export default mongoose.model("user", userSchema)