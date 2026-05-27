const musicModel = require("../models/music");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../Services/storage.service")


async function createmusic(req, res) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "You don't have access to create artwork",
            });
        }
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    const { title } = req.body;
    const uri = req.file;
     
    const result = await uploadFile(file.buffer.toString('base64'))
        
    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: decode.id
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
} 

module.exports = { createmusic }