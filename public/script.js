var socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msglist');



btn.onclick = function exec() {
    socket.emit('msg_send', {
        msg: inputMsg.value
    });
}

socket.on('msg_rcv', (data) => {
    let limsg = document.createElement('li');
    limsg.innerText = data.msg;
    msgList.appendChild(limsg);
})



// let btn = document.getElementById('btn');
// btn.onclick = function exec() {
//     socket.emit('from_client');
// }

// socket.on('from_server', () => {
//     console.log('collected a new event from the server');
//     const div = document.createElement('div');
//     div.innerText =  'New event from server';
//     console.log(div);
//     document.body.appendChild(div);
// })