const express = require('express');
const connecteddb = require('./models/post.model')

const app = express();
app.use(express.json());






module.exports = app;
