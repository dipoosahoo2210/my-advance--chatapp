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


    socket.on('disconnect',()=>{
        console.log("clint was disconnected");
    })
})
server.listen(port,()=>{
    console.log(`app is listen to  port : ${port}`);
})