const app = require("./src/app");
const connecteddb = require("./src/db/db");

connecteddb();

app.listen(3000, ()=> {
    console.log("SErver is running on port 3000");
    
})