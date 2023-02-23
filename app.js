const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// 
app.use(express.json());
app.use(cors());

const productRouter = require('./routers/product.router');

app.use('/api/v1/product', productRouter);
app.use('/images', express.static("./images"));

app.get("/", (req,res)=>{
    res.send("Router is working");
});


module.exports = app;