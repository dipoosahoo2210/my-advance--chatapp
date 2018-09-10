const  path = require('path');
const  http = require('http');
const express = require('express');
const  socketIO = require('socket.io');



const publicpath = path.join(__dirname,'../public');
var port = process.env.PORT||3000;

var app = express();

var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicpath));


io.on("connection" ,(socket)=>{
    console.log(" a  new user is connected");




    socket.emit('newEmail' ,{
        from:"pakaudirector@gmail.com",
        text:" hey whats goin on",
        createat: 1234
    });
    socket.on('createMessage',(message)=>{
        console.log("createMessage :", message);
    })

    socket.emit('newMessage' ,{
        from:"reena rani sahoo",
        text:"meet you soon",
        createat:122344
    })

    socket.on('disconnect',()=>{
        console.log("clint was disconnected");
    })
})
server.listen(port,()=>{
    console.log(`app is listen to  port : ${port}`);
})