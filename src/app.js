require('./models/product');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const productRouter = require('./routers/product-route');
const index = require('./routers/index');

app.use('/product', productRouter);
app.use('/', index);

module.exports = app;