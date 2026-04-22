const express = require("express");

const app = express(); // server instance create kr rhe hai

app.get("/",(req,res)=>{
    res.send("ho gya")    // set of rule or protocol that allow different sowftware program  to cominicate and exchange data and functionality with each other simple ree fontend talk to backend . rest api is type of api
})

app.listen(3000) // but here server ko start krne ke liye (3000 is port number )

// npm init -y => Node.js appliction initiate

// npm i express => install express package

// create server.js

