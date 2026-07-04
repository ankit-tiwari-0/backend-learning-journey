const http = require("http")


const server = http.createServer((req, res)=>{
      res.end("Hello server is up")
})


server.listen(5000, ()=>{
    console.log("server is connected", 5000);
    
})