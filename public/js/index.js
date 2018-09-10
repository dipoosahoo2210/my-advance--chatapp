var socket = io();
socket.on('connect',function(){
    console.log("conneted to the server");

socket.emit('createMessage',{
    from:"dipoo",
    text :"ya its true i am texting"
})
})

socket.on('disconnect',function(){
    console.log("dis connect the sever");
})

socket.on('newMessage',function (message) {
    console.log(" new email " , message);
})