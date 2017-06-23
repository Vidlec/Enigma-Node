const enigma = require("./enigma.js");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
    socket.on("create-enigma", (wheels) => {
        socket.enigma = new enigma(wheels);
    });
    socket.on("encrypt", (data) => {
        socket.enigma.enigma(data.toUpperCase()).then(result => socket.emit("lamp", result));
    });
});
app.use(express.static("client"));
http.listen(process.env.PORT || 3000);