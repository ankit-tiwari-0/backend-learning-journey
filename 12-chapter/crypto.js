const crypto = require("crypto");

// 1. randomBytes

const randomvalue = crypto.randomBytes(80);

console.log(randomvalue.toString("hex"));


// createhash

const hashvalue = crypto.createHash("sha256").update("ankit").digest("hex")


console.log(hashvalue);

// 3. Encryption (AES)
// ----------------------------
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  return encrypted;
}


// ----------------------------
// 4. Decryption (AES)
// ----------------------------
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}


// ----------------------------
// TEST ENCRYPTION / DECRYPTION
// ----------------------------
const text = "Hello Ankit";

const encryptedText = encrypt(text);
const decryptedText = decrypt(encryptedText);

console.log("Original Text:", text);
console.log("Encrypted Text:", encryptedText);
console.log("Decrypted Text:", decryptedText)