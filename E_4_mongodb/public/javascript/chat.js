$(function(){

    var socket = io.connect('http://localhost:8080');

    socket.on('connect', function(){
        socket.emit('show messages');
    });
    //emit "send message" event with the input data
    $('#submit-button').click(function(){
        var message = $('#message');
        socket.emit('send message', message.val());
        $('textarea').val('').empty();
    });
    //append sent message to chat
    socket.on('append message', function(msg){
        var date = new Date();
        $('#list').append($('<div class= "alert alert-success"' + '<p>'+ date + '</p><p><b>' + msg + '</b></p>' + '</div'));
    });
    //show all messages in the database
    socket.on('chat open', function(msg){
        $('#list').empty();
        $.each(msg, function(key, value){
            $('#list').append($('<div class= "alert alert-success"' + '<p>'+ value.date + '</p><p><b>' + value.message + '</b></p>' + '</div'));
        });
    });

});
