const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const socketserver = require('./socket-connection/index.js');
const path = require('path');

socketserver.instantiateSocket(io);

// app.get('/', function(req,res){
//     res.sendFile(path.resolve('./index.html'));
// });

app.post('/chat-room/:roomname', function(req,res){
    socketserver.joinroom(req.params.roomname);
});

http.listen(port, function(){
    console.log("listening on port: "+ port);
});

