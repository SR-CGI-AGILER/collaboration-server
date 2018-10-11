
var socket1;
var io1;

function instantiateSocket(io) {
    io.on('connection', function(socket) {
        // socket.broadcast.emit('connect');
        console.log(socket.id);
        io1=io;
        socket1=socket;
        socket.on('chat message', function(msg){
            
            io.emit('chat message', msg)
            
          });
    })

}

function joinroom(roomname){
    socket1.join(roomname);
    // console.log(io1.nsps['/'].adapter.rooms[roomname].length);
        console.log(socket1.adapter.rooms)
    

}

module.exports = {
    instantiateSocket, joinroom
}
