const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{


    //1 (●'◡'●) downloading file in a bad way  ❌
   const file = fs.readFileSync("sample.txt", "utf-8")
      res.end(file)


   //*2 Downloading file in a good way
   
   const readableStream = fs.createReadStream("sample.txt")
   readableStream.pipe(res)    //method
   res.end()


// -----------2------------

// 1 copy file in bad way ❌

const file = fs.readFileSync("sample.txt")
fs.writeFileSync("output.txt", file)
res.end


//2  copy file in good way

const readstream = fs.createReadStream("sample.txt");
const writestream = fs.createWriteStream("output.txt");

readstream.on("data", (chank)=>{
    console.log("CHUNK :", chank);
    writestream.write(chank)
    
})




      
})

             



server.listen(5000, ()=>{
    console.log("server is connected", 5000);
    
})