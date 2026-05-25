const express = require('express');
const cookis = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const musicRouter = require('./routes/music.router')



const app = express();
app.use(express.json());
app.use(cookis());

app.use('/app/auth', authRoutes);
app.use('/api/music', musicRouter); 

module.exports = app