const app = require('express')();
const http = require('http').Server(app);
const path = require('path')
const io = require('socket.io')(http);
const socketServer= require('./socket-connection/index.js');
const port = process.env.PORT || 3000;
socketServer.instantiateSocket(io);

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//       res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     next();
//  });

// app.get('/', function(req,res){
//     res.sendFile(path.resolve('./index.html'));
// });

app.post('/chat-room/:roomname', function(req,res){
    socketserver.joinroom(req.params.roomname);
});

http.listen(port, function(){
    console.log("listening on port: "+ port);
});

