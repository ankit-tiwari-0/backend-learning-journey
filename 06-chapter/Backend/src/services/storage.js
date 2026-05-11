const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY,
     urlEndpoint: process.env.URL_ENDPOINT
    
})

async function uploadFile(buffer){
    console.log(buffer);

    const result = await imagekit.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result;
}

module.exports = uploadFile;