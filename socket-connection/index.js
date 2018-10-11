


function instantiateSocket(io){
io.on('connection', function(socket){
    console.log(socket.id);
    console.log(socket.adapter);
    socket.on('chat message',function(msg){
        console.log('message: '+msg);
    socket.broadcast.emit('chat message',msg);
    // console.log('user connected');){}
});
});
}  
module.exports = { instantiateSocket }  
