import express from 'express';
import publicRoutes from './router/public.routes.js'
import pvt from './router/private.routes.js';



const app = express();



//InBuild Middleware
app.use(express.json());
app.use("/public", publicRoutes)
app.use("/pvt", pvt)

app.listen(3000, (req , res)=>{
    
    console.log("server starting 3000");
    
})