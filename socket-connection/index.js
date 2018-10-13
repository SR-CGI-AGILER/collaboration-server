
var socketIns;

function instantiateSocket(io){
io.on('connection', function(socket){
    
    console.log(socket.id);
    socketIns = socket;
    // console.log(socket.adapter);
    // socket.on('chat message',function(msg){
    //     console.log('message: '+msg);
    // socket.broadcast.emit('chat message',msg);

    // socket.on('join',function(room){
    //     socket.join(room);
    // });
    // console.log(socket.id);

    // console.log('user connected');){}
// });
socket.on('message', function(msg){
    console.log('message:'+JSON.stringify(msg));


    io.emit('message', msg);
   })
});
}
function joinroom(roomname){
    // console.log('aslkfsflk');
    // socketIns.on('join',function(roomname){
        socketIns.join(roomname);
    console.log(socketIns.rooms);
}
module.exports = { instantiateSocket , joinroom }
