const express = require('express');
const music = require("../controllers/music.controller")
const authMiddle = require("../middlewares/auth.middleware")

const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
})

const router= express.Router();

router.post("/upload", authMiddle.authArtist, upload.single("music"), music.createmusic)

router.post("/album", music.createAlbum)

router.get("/", music.getAllmusic)


module.exports = router; 7;45


