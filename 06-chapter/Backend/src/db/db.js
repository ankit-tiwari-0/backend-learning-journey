const mongo = require('mongoose');

async function databaseconnect() {
    await mongo.connect(process.env.MONGO_KA_LINK)
    console.log("DB bhi chal raho hai");
    
}

module.exports = databaseconnect;