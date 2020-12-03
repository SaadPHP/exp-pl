
// init express
var express = require('express');

// setting up express
var app = express();

// setting up ejs
app.set('view engine','ejs');

// setting static directory
app.use(express.static(__dirname + '/public'));

/*
default route for normal .html pages
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});
*/ 

// default route
app.get('/',(req, res) => {
    res.render('index');
});

// contact route
app.get('/contact',(req, res) => {
    res.render('contact');
});

// profile route with ejs and params
app.get('/profile/:name', (req, res) => {
    var data = {age: 31, job: 'Sr. Full Stack Developer', hobbies: ['Gaming','Programming','Animes']};
    res.render('profile', {name: req.params.name, data: data});
});

// 404 route
app.get('*',(req, res) => {
    res.render('404');
});

// handling port
app.listen(3000, () => {
    console.log('now listening to port 3000');
})