var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Welcome to Express!');
});

app.get('/about', function(req, res){
    res.send('This is a page about us');
});

app.get('/contact', function(req, res){
    res.send('Here you should be able to contact us');
});

app.get('/blog', function(req, res){
    res.send('This is a blog');
});

app.listen(8080);
