const express = require("express");
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => { // inside the callback we get socket object
    console.log('a user Connected', socket.id);

    // socket.on('from_client', () => {
    //     console.log('event coming from client');
    // })

    socket.on('msg_send', (data) => {
        console.log(data);
        // io.emit('msg_rcvd', data);
        // socket.emit('msg_rcvd', data);
        socket.broadcast.emit('msg_rcvd', data);
    })

    // setInterval(() => {
    //     socket.emit('from_server');
    // }, 2000)
});

app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () => {
    console.log('Server Started');
}); 

//every socket object have unique id