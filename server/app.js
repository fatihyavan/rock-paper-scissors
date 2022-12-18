const express = require("express");
require("dotenv").config();
const app = express();
const scoreboard = require("./src/config/scoreboard");


app.use()

app.listen(process.env.PORT,()=>{
    console.log(`Server has alive ${process.env.PORT}`);
})