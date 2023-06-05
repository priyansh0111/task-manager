//jshint esversion:6
require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const handleDB = require('./routes/handleDB');
const cors = require('cors')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({
    origin: "*"
}))

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});
app.get("/read", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

const urlDB = process.env.taskDB;
console.log(urlDB);
mongoose.connect(urlDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
});

app.use("/backend/api/database", handleDB);

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
});