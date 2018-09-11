var socket = io();
socket.on('connect',function(){
    console.log("conneted to the server");

// socket.emit('createMessage',{
//     from:"dipoo",
//     text :"ya its true i am texting"
// })
})

socket.on('disconnect',function(){
    console.log("dis connect the sever");
})

socket.on('newMessage',function (message) {
    console.log(" new email " , message);
    var li = jQuery('<li></li>');
    li.text(`${message.from} :    ${message.text}`);

    jQuery('#messages').append(li);
})

// socket.emit('createMessage',{
//     from:"frank",
//     text:"hi"
// },function (data) {
//     console.log(" got it " ,data);
// })




jQuery("#message-form").on("submit",function (e) {
    e.preventDefault();
    socket.emit('createMessage',{
        from:"user",
        text:jQuery('[name=message]').val()
    },function () {

    })
})