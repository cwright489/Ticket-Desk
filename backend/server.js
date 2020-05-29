const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("./passport");


//Express
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls serializeUser and deserializeUser

// express sessions
app.use(
    session({
        secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
        resave: false, //required
        saveUninitialized: false //required
    })
);

app.use((req, res, next) => {
    console.log('req.session', req.session);
    return next();
});

app.post('/user', (req, res) => {
    console.log('user signup');
    req.session.username = req.body.username;
    res.end()
  })


//mongoDB
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established succuessfully!")
});

const ticketsRouter = require("./routes/tickets");
const usersRouter = require("./routes/users");
const signUpRouter = require("./routes/signUp");

app.use('/tickets', ticketsRouter);
app.use('/users', usersRouter);
app.use('/signup', signUpRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port} !!`);
});