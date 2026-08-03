import express from "express"
import crypto from "crypto"
import { type } from "os"
import { log } from "console"

const app = express()

app.use(express.json())


// Generate RSA Key Pair
const generateKeys = () => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048, // Key size in bits
    publicKeyEncoding: {
      type: "pkcs1", // Public key format
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1", // Private key format
      format: "pem",
    },
  });

  return { publicKey, privateKey };
};

const keys = generateKeys()
const publicKey = keys.publicKey;
const privateKey = keys.privateKey;




app.listen(3000, () =>{
    console.log("sevef is running");
    // console.log("Public key: \n", publicKey);
    // console.log("privt \n", privateKey); 
    
    
})