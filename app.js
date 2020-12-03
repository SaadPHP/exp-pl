
// init express
var express = require('express');

// setting up express
var app = express();

// setting up ejs
app.set('view engine','ejs');

// default route
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

// contact route
app.get('/contact',(req, res) => {
    res.sendFile(__dirname + '/client/contact.html');
});

// prof route with params
app.get('/prof/:name',(req, res) => {
    res.send(`Welcome to profile of ${req.params.name}`);
});

// profile route with ejs and params
app.get('/profile/:name', (req, res) => {
    var data = {age: 31, job: 'Sr. Full Stack Developer', hobbies: ['Gaming','Programming','Animes']};
    res.render('profile', {name: req.params.name, data: data});
});

// 404 route
app.get('*',(req, res) => {
    res.sendFile(__dirname + '/client/404.html');
});

// handling port
app.listen(3000, () => {
    console.log('now listening to port 3000');
})