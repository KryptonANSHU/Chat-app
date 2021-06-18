const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000

const app = express();
const staticpath = path.join(__dirname,'../public');

const createserver = http.createServer(app);
const io = socketIO(createserver);          // Gives access to Socketio library

app.use(express.static(staticpath));

io.on('connection',(socket)=>{
    console.log("A New User JustConnected")

    
  socket.on('disonnect',(socket)=>{
    console.log("User Disconnected")
  }) 

})


// ----------------------------------------------------------------


// app.listen(port,()=>{
//     console.log('Connected at ' + port);
// })

createserver.listen(port,()=>{
    console.log('Connected at ' + port);
})
// important to create your own server for Socketio