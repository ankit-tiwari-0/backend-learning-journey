const { log } = require("console")
const fs = require("fs")

setImmediate(()=>{console.log("Hello from immediate -1")} ,0)

setTimeout(() => {
    console.log("Hello from timeot -3");
    
}, 0);

console.log("Hello world -2");


