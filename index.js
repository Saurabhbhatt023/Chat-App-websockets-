const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io'); // ✅ Correct import

const app = express();
const server = http.createServer(app);
const io = new Server(server); // ✅ Create a new socket.io server instance

// Serve static files (Make sure you have a "public" folder)
app.use(express.static(path.resolve(__dirname, "public")));

io.on('connection', (socket) => {
    socket.on('user-message', (message) => {
        console.log("A new user message:", message);
    });

    socket.on('disconnect', () => {
        console.log("User disconnected:", socket.id);
    });
})

// Start the server
server.listen(9000, () => console.log('Server started on port 9000 🚀'));
