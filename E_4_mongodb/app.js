var mongoose = require('mongoose');
var express = require('express');
var app = require('express')();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index');
});


//Mongoose
var Schema = mongoose.Schema;
var chatSchema = new Schema({
    message: String,
    date: Date
});

mongoose.model('Messages', chatSchema);
mongoose.connect('mongodb://localhost/chat');

var Messages = mongoose.model('Messages');

//Messages.remove({}, function (err) {
   //if (err) return handleError(err);
//});


//socket
io.on('connection', function(socket){
    console.log('user connected');
    socket.on('show messages', function(){
        Messages.find(function(err, docs){
           socket.emit('append messages', docs);
        });
    });

    socket.on('send message', function(msg){
        var message = new Messages();
        message.message = msg;
        var timestamp = new Date();
        timestamp.setHours(timestamp.getHours() + 2)
        message.date = timestamp;
        message.save(function(err) {
            if (err){
                console.log(err);
            }
        });
        io.sockets.emit('append message', message);
    });

    socket.on('disconnect', function(){
        console.log('disconnected');
    });
});

http.listen(port, function(){
    console.log('listening on 8080');
});
