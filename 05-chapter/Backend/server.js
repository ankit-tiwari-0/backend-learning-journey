const mongo = require('mongoose');

async function databaseconnect() {
    await mongo.connect(process.env.MONGO_KA_LINK)
    console.log("DB bhi chal raho hai");
    
}

module.exports = databaseconnect;

const app = require("./src/app");


app.listen(3000, ()=> {
    console.log("SErver is running on port 3000");
    
    
})