const lamps = "QWERTZUIOPASDFGHJKLYXCVBNM".split("").map((letter) => {return {letter: letter, glowing: "dim"};});
export const config = {
    keyboard: {
        firstRow: "QWERTZUIOP",
        secondRow: "ASDFGHJKL",
        thirdRow: "YXCVBNM"
    },
    lamps: lamps,
    rotors: [{
            label: "I",
            position: 1,
            letters: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
            selected: false
        },
        {
            label: "II",
            position: 1,
            letters: "VZBRGITYUPSDNHLXAWMJQOFECK",
            selected: false
        },
        {
            label: "III",
            position: 1,
            letters: "NZJHGRCXMYSWBOUFAIVLPEKQDT",
            selected: false
        },
        {
            label: "IV",
            position: 1,
            letters: "FKQHTLXOCBJSPDZRAMEWNIUYGV",
            selected: false
        },
        {
            label: "V",
            position: 1,
            letters: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
            selected: false
        }
    ]
};