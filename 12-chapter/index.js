const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{


    //1 (●'◡'●) downloading file in a bad way  ❌
   // const file = fs.readFileSync("sample.txt", "utf-8")
   //    res.end(file)


   //*2 Downloading file in a good way
   
   const readableStream = fs.createReadStream("sample.txt")
   readableStream.pipe(res)    //method



      
})

             



server.listen(5000, ()=>{
    console.log("server is connected", 5000);
    
})