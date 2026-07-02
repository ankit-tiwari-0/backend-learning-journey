const { error, log } = require("console")
const fs = require("fs")
const os = require("os")

console.log(os.cpus()[0].model);

console.log(os.cpus().length)


// writen

// fs.writeFileSync("./09-chapter/test.txt", "hello world i am sync")

// fs.writeFile("./09-chapter/text.txt", "hello world i am async", (err)=>{
//     console.log(err);
    
// })


// *read


// const res = fs.readFileSync("./09-chapter/text.txt", "utf-8")
// console.log(res);

// fs.readFile("./09-chapter/test.txt", "utf-8", (error, response)=>{
//     if(error){
//         console.log(error);
        
//     }
//     else{
//         console.log(response);
        
//     }
// })


// update/ append

// fs.appendFileSync("./09-chapter/test.txt", 
//     "\n" + new Date().toDateString())


// fs.appendFile("./09-chapter/text.txt", "\n" + `hello appean naa annaa ${new Date().toLocaleTimeString()} `,
//  (err, res)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log(res);
        
//     }
// }


// ------ fs.cpSync() .......

// fs.cpSync("./09-chapter/test.txt", "./09-chapter/copy.txt");
//  console.log("cpSync() is used to copy a file or folder from one location to another.");


// ---------fs.unlinkSync() ..

// fs.unlinkSync("./09-chapter/copy.txt");
// console.log("unlinkSync() is used to delete a file.");


// const info = fs.statSync("./09-chapter/test.txt");
  
// console.log("statSync() returns information (metadata) about a file or folder.", info);



// ---------- fs.mkdirSync()-------------
// mkdirSync() creates a new folder (directory).


// fs.mkdirSync("./09-chapter/uploads/images", {
//     recursive: true
// })
 