const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;
const publicPath = "/workspaces/simple-website-setup/public"
app.get('/', (req, res) => {
    res.sendFile(publicPath + '/index.html');
});

server.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
})

