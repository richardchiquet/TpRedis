const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./routes/users');
const jwt = require('jsonwebtoken')
const token = jwt.sign({ _id: user._id, admin: true }, process.env.JWT_SECRET, { expiresIn: '1 week' })

app.use(bodyParser.json());
app.use('/user', userRoute);

app.use('/', () =>{
    console.log('hello')
});

app.get('/',(req, res) => {
    res.send('Hello')
});

mongoose.connect('mongodb://localhost:27017/redis',
    { useUnifiedTopology: true , useNewUrlParser: true }, 
    () => console.log('connected to DB!'));

app.listen(3000);