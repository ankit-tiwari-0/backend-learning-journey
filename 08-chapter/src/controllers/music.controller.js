const musicModel = require("../models/music");
const albumModel = require("../models/album.model")
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../Services/storage.service")


async function createmusic(req, res) {

    const { title } = req.body;
    const file = req.file;
     
    const result = await uploadFile(file.buffer.toString('base64'))
        
    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
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

async function createAlbum(req, res) {
    
    const token = req.cookies.token;

        const {title, musics} =req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
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
        
   
}


async function getAllmusic(req, res) {
    
    const musics = await musicModel.find().populate("artist","username")

    res.status(200).json({
        messa: "music fetcheddd",
        musics: musics
    })
}

module.exports = { createmusic, createAlbum , getAllmusic};