$(function(){
    var socket = io.connect('http://localhost:8080');

    socket.on('connect', function(){
        socket.emit('show messages');
    });

    $('#submit-button').click(function(){
        var messageInput = $('#message');
        socket.emit('send message', messageInput.val());
        $('textarea').val('').empty();
    });

    var renderMessage = function(msg){
        var messageBody = $('<div>', {
            class: 'alert alert-success'
        });
        var publishedDate = $('<p>', {
            html:msg.date
        });
        var publishedMessage = $('<b>', {
            html: msg.message
        });
        messageBody.append(publishedDate, publishedMessage);
        $('#list').append(messageBody);
    };

    socket.on('append message', function(msg){
        renderMessage(msg);
    });

    socket.on('append messages', function(msgs){
        $('#list').empty();
        $.each(msgs, function(_, msg){
            renderMessage(msg);
        });
    });
});
