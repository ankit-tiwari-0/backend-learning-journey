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

// Encrypt using Public Key
const encrypt = (publicKey, message) => {
  const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message));
  return encrypted.toString("base64");
};

// Decrypt using Private Key
const decrypt = (privateKey, encryptedMessage) => {
  const decrypted = crypto.privateDecrypt(
    privateKey,
    Buffer.from(encryptedMessage, "base64")
  );
  return decrypted.toString("utf8");
};


const keys = generateKeys()
const publicKey = keys.publicKey;
const privateKey = keys.privateKey;



app.post("/encrypt", (req, res) => {
  const { message } = req.body;
  const encrypted = encrypt(publicKey, message);
  res.json({ encrypted });
});

app.post("/decrypt", (req, res) => {
  const { encryptedMessage } = req.body;
  const decrypted = decrypt(privateKey, encryptedMessage);
  res.json({ decrypted });
});

app.listen(3000, () =>{
    console.log("sevef is running");
    console.log("Public key: \n", publicKey);
    console.log("privt \n", privateKey); 
    
    
})