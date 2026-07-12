import express from 'express';
import publicRoutes from './router/public.routes.js'
import pvt from './router/private.routes.js';
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import logMiddleware from './middleware/log.midleware.js';

const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);


if (!fs.existsSync(path.join(__dirname, "logs"))) {
    fs.mkdirSync(path.join(__dirname, "logs"))
}

//! Global
app.use(logMiddleware)

//InBuild Middleware
app.use(express.json());
app.use("/public", publicRoutes)
app.use("/pvt", pvt)



app.listen(3000, (req , res)=>{
    
    console.log("server starting 3000");
    
})