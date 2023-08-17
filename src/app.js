const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const index = require('./routers/index');
app.use('/', index);

module.exports = app;