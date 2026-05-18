const express = require('express');
const cookis = require('cookie-parser');



const app = express();
app.use(express.json());
app.use(cookis());


module.exports = app