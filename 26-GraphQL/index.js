import express from "express"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@as-integrations/express5"
import bodyParser from "body-parser"
import cors from "cors"
import axios from "axios"

async function startServer(params) {
    const app = express()
   
    const typeDefs = `
    type Todo {
        id: ID!
        title: String!
        completed: Boolean
    }
    
    type getUser {
      id: ID!
      name: String
      username: String
      email: String
      phone: String
    }


    type Query {
        getTodoss: [Todo]
        getUser:[getUser]
    }
`;

const resolvers = {
    Query: {
        getTodoss: async () =>
            (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
        getUser: async () =>
            (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

    await server.start()
    app.use(bodyParser.json());
    app.use(cors());
    app.use("/graphql", expressMiddleware(server))  
    app.listen(8000, ()=>{
        console.log("Server is runnig")
    })
}

startServer()