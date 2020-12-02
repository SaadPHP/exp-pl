
// init express
var express = require('express');

// setting up express
var app = express();

// default route
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

// contact route
app.get('/contact',(req, res) => {
    res.sendFile(__dirname + '/client/contact.html');
});

// profile route with params
app.get('/profile/:name',(req, res) => {
    res.send(`Welcome to profile of ${req.params.name}`);
});

// 404 route
app.get('*',(req, res) => {
    res.sendFile(__dirname + '/client/404.html');
});

// handling port
app.listen(3000, () => {
    console.log('now listening to port 3000');
})