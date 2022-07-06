const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const url = 'mongodb://localhost/userDB'
const app = express();

mongoose.connect(url)
const connection = mongoose.connection;

connection.on('open', () => {
    console.log("Connected to the database");
});

//Setting up basic middleware for all express requests
app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.json());

app.get('/', (req, res) => {
    res.send(req.body.)
});


const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log("Server has been started on the port 3000.");
});

