        import io from "socket.io-client";
        var socket = io.connect("http://localhost:3000");
        socket.on("connect", (data) => {
            console.log("connected");
            let wheels = [{
                    position: 5,
                    letters: "AJDKSIRUXBLHWTMCQGZNPYFVOE"
                },
                {
                    position: 3,
                    letters: "VZBRGITYUPSDNHLXAWMJQOFECK"
                },
                {
                    position: 22,
                    letters: "NZJHGRCXMYSWBOUFAIVLPEKQDT"
                }
            ];
            socket.emit("create-enigma", wheels);
            socket.emit("encrypt", "I");
            socket.emit("encrypt", "H");
            socket.emit("encrypt", "D");
            socket.emit("encrypt", "V");
        });