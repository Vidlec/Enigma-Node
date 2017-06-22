export const config = {
    keyboard: {
        firstRow: "QWERTZUIOP",
        secondRow: "ASDFGHJKL",
        thirdRow: "YXCVBNM"
    },
    lamps: this.keyboard.firstRow.concat(this.keyboard.secondRow, this.keyboard.thirdRow),
    rotors: [{
            position: 5,
            letters: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
            selected: false
        },
        {
            position: 3,
            letters: "VZBRGITYUPSDNHLXAWMJQOFECK",
            selected: false
        },
        {
            position: 22,
            letters: "NZJHGRCXMYSWBOUFAIVLPEKQDT",
            selected: false
        },
        {
            position: 1,
            letters: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
            selected: false
        },
        {
            position: 0,
            letters: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
            selected: false
        }
    ]
};