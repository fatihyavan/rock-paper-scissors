const express = require("express");
require("dotenv").config();
const app = express();
const scoreboard = require("./src/router/scoreRouter");
const sequelize = require("./src/config/database");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/score",scoreboard);

sequelize.sync()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.listen(process.env.PORT,()=>{
    console.log(`Server has alive ${process.env.PORT}`);
})