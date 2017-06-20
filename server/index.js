enigma = require("./enigma.js");
let Enigma = new enigma("hello",[{
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
]);

Enigma.enigma().then(result=>console.log(result));