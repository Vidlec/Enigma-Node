const enigma = require("./enigma.js");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
    console.log("user connected");

    socket.on("create-enigma", (wheels) => {
        socket.enigma = new enigma(wheels);
    });
    socket.on("encrypt", (data) => {
        socket.enigma.enigma(data.toUpperCase()).then(result => console.log(result));

    });
});
app.use(express.static("client"));
http.listen(3000);