import express from "express"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express5"
import bodyParser from "body-parser"
import cors from "cors"


async function startServer(params) {
    const app = express()


    app.listen(8000, ()=>{
        console.log("Server is running")
    })
}