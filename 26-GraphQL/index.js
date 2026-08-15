import express from "express"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@as-integrations/express5"
import bodyParser from "body-parser"
import cors from "cors"


async function startServer(params) {
    const app = express()
   
    const typeDefs = `
    type Query {
       hello:String
       name:String
    }
    `
    const resolvers = {
        Query:{
            hello:()=>"hello world!",
            name:()=>"ankit"
        }
    }

    const server = new ApolloServer({typeDefs, resolvers})

    await server.start()
    app.use(bodyParser.json());
    app.use(cors());
    app.use("/graphql", expressMiddleware(server))  
    app.listen(8000, ()=>{
        console.log("Server is runnig")
    })
}

startServer()