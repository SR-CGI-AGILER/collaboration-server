const app = require('express')();
const http = require('http').Server(app);
const path = require('path')
const io = require('socket.io')(http);
const socketServer= require('./socket-connection/index.js');

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//       res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     next();
//  });

socketServer.instantiateSocket(io);

app.get('/', function(req,res){    
    res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.post('/chat-room/:roomname', function(res, req) {
    console.log(res.params)
    socketServer.joinroom(res.params.roomname);
    // socket1.join(roomname);
    req.send({
        status: "joined the soket room"
    })
    
});

http.listen(3000, function(){
    console.log("listening on port 3000");
});

