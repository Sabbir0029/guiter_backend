const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

// app is imput
const app = require("./app");

// database connect
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("database is connect")
});

const prot = process.env.PROT || 8080;

app.listen(prot, (req,res)=>{
    console.log(`server start on prot${prot}`)
});