const lamps = "QWERTZUIOPASDFGHJKLYXCVBNM".split("").map((letter) => {
    return {
        letter: letter,
        glowing: "dim"
    };
});
export const config = {
    keyboard: {
        firstRow: "QWERTZUIOP",
        secondRow: "ASDFGHJKL",
        thirdRow: "YXCVBNM"
    },
    choseSlots: [{
            rotor: {
                label: "I",
                position: 1,
                letters: "LEYJVCNIXWPBQMDRTAKZGFUHOS",
                selected: false,
            }
        },
        {
            rotor: {
                label: "II",
                position: 1,
                letters: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
                selected: false,
            }
        },
        {
            rotor: {
                label: "III",
                position: 1,
                letters: "NZJHGRCXMYSWBOUFAIVLPEKQDT",
                selected: false,
            }
        },
        {
            rotor: {
                label: "IV",
                position: 1,
                letters: "FKQHTLXOCBJSPDZRAMEWNIUYGV",
                selected: false,
                //index: 3
            }
        },
        {
            rotor: {
                label: "V",
                position: 1,
                letters: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
                selected: false,
                //index: 4
            }
        },
    ],
    selectedSlots:[
        {rotor:null},{rotor:null},{rotor:null}
    ]
    ,
    lamps: lamps
};