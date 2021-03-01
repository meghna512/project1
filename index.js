const express = require("express");
const app = express();
const db= require("./db");
const route= require("./routes");
const bodyParser = require('body-parser');

db.connectDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 

app.use("/",route);

app.listen(3000, function(){
    console.log("server is up");
});