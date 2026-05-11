require('dotenv').config();
const app = require("./src/app");
const databaseconnect= require("./src/db/db")

databaseconnect()

app.listen(3000, ()=>{
    console.log("server chal rha h");
    
})