const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve(__dirname, "public")));

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // ✅ Listen for messages
    socket.on('user-message', (message) => {
        console.log("Received:", message);
        
        // ✅ Send message to ALL connected clients
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(9000, () => console.log('Server started on port 9000 🚀'));
