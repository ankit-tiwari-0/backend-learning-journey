const { log } = require("console")
const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
  
    const readableStream = fs.createReadStream("sample.txt");
    // readableStream.pipe(res)
    // res.end


    // copy
    const writableStream = fs.createWriteStream("practice.txt");

    readableStream.on("data",(chunk)=>{
        console.log(chunk);
        
        writableStream.write(chunk)
    })
    res.end()

    
})

server.listen(5000, ()=>{
    console.log("server is running", 3000);
    
})