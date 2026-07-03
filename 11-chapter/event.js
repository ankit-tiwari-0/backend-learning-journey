const EventEmitter = require("events")

const emitter = new EventEmitter()

//keymethod

//* on(eventName , Listener) ---create

emitter.on("GREET", (username , id)=>{
    console.log(`Hello world ${username} and the id is ${id}`);
    
})

//* emit(eventName, [args])--- execute

emitter.emit("GREET" , "Suraj" , "DDDDDDDDDDDD11")





//keymethod better way

//* on(eventName , Listener) ---create

emitter.on("GReET", (args)=>{
    console.log(`Hello world ${args.username} and the id is ${args.id}`);
    
})

//* emit(eventName, [args])--- execute

emitter.emit("GReET" , {
    username: "ank",
    id: "HH111111@@@@@@"
})