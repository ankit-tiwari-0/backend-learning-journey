const express = require('express');
const music = require("../controllers/music.controller")

const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
})

const router= express.Router();

router.post("/upload",upload.single("music"), music.createmusic)

router.post("/album", music.createAlbum)


module.exports = router;


