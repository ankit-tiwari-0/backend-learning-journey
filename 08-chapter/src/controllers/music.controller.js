const musicModel = require("../models/music");
const albumModel = require("../models/album.model")
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../Services/storage.service")


async function createmusic(req, res) {
      const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT);

        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "You don't have access to create artwork",
            });
        }

    const { title } = req.body;
    const file = req.file;
     
    const result = await uploadFile(file.buffer.toString('base64'))
        
    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: decoded.id
    })

    res.status(201).json({
        message: "Music create successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })

     } catch (err) {
       
        console.log(err);
        

        return res.status(401).json({
            message: "Unauthorized",
        });
    }
} 

async function createAlbum(req, res) {
    
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT)

        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "YOU DONT have access"})
        }

        const {title, musics} =req.body;

        const album = await albumModel.create({
            title,
            artist: decoded.id,
            musics: musics,
        })

        res.status(201).json({
            message: "Album created successfully",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics
            }
        })
        
    } catch (error) {
       console.log(error);
       return res.status(401).json({message: "Uauthorized"})
        
    }
}

module.exports = { createmusic, createAlbum };