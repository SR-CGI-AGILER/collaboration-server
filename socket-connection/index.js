
var socketIns;

function instantiateSocket(io){
io.on('connection', function(socket){
    
    console.log(socket.id);
    socketIns = socket;
        
socket.on('message', function(msg){
    console.log('message:'+JSON.stringify(msg));


    io.emit('message', msg);
   })
});
}
function joinroom(roomname){
    console.log('joined');
    // socketIns.on('join',function(roomname){
        socketIns.join(roomname);
    console.log(socketIns.adapter.rooms);
}
module.exports = { instantiateSocket , joinroom }
