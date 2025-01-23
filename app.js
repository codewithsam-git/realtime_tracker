const express = require('express');
const http = require('http'); //pre installed in nodejs
const socketio = require("socket.io");
const path = require('path');

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));



app.get('/', function(req, res){
    res.send("Realtime")
});

server.listen(3000, ()=>{
    console.log("Running")
});