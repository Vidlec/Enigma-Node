//In reality, Enigma could had only 10 connected pairs
//Here its 13 pairs
const plugboard = {
    input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    output: "EKMFLGDQVZNTOWYHXUSPAIBRCJ"
}

//Wheels definition
//TODO: Write funtion which doesnt care about number of wheels
const wheels = [{
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
]

//Reflector
const reflector = {
    letters: "ESOVPZJAYQUIRHXLNFTGKDCMWB"
}

//We need to "reflect" the letters. So we simply reverse the array.
//This way, you can use enigma for encryption as well as decryption
//Big flaw is: letter can never become itself.
function reflect(letter) {
    return swap(letter, reflector.letters, reflector.letters.split("").reverse().join(""), 0);
}

//Initial settings for wheels. 
function init(){
    for(let wheel of wheels){
        let letters = wheel.letters.split("");
        let spliced = letters.splice(0,wheel.position);
        letters = letters.concat(spliced);
        wheel.letters = letters.join("");
    }
}

//After each keypress we need to roatate the wheels
//Key is to do something called double stepping. 
//When one wheel reaches 25 rotate it once more and then rotate next wheel once
function rotate() {
    for (let wheel of wheels) {
        if (wheel.position < 25) {
            wheel.position++;
            let letters = wheel.letters.split("")
            let letter = letters.shift();
            letters.push(letter);
            wheel.letters = letters.join("");
            break;
        } else {
            wheel.position = 0;
            let letters = wheel.letters.split("")
            let letter = letters.shift();
            letters.push(letter);
            wheel.letters = letters.join("");
        }
    }
}

//Compare two arrays of letters
function swap(letter, input, output) {
    letter = input[output.indexOf(letter)];
    return letter;
}

//Encode message
//TODO: Write function for wheels passage (forwards and backwards)
function encode(input) {
    return new Promise((resolve, reject) => {
        let output = "";
        init();
        for (let letter of input) {

            //Rotate wheels once BEFORE encoding
            rotate();
            //Plugboard
            letter = swap(letter, plugboard.input, plugboard.output);
            //Firstwheel
            letter = swap(letter, plugboard.output, wheels[0].letters);
            //Secondtwheel
            letter = swap(letter, wheels[0].letters, wheels[1].letters);
            //Thirdtwheel
            letter = swap(letter, wheels[1].letters, wheels[2].letters);
            //Reflector
            letter = swap(letter, wheels[2].letters, reflector.letters);
            letter = reflect(letter);

            //All again backwards
            //Thirdtwheel
            letter = swap(letter, reflector.letters, wheels[2].letters);
            //Secondtwheel
            letter = swap(letter, wheels[2].letters, wheels[1].letters);
            //Firstwheel
            letter = swap(letter, wheels[1].letters, wheels[0].letters);
            //Plugboard
            letter = swap(letter, wheels[0].letters, plugboard.output);
            //Output
            letter = swap(letter, plugboard.output, plugboard.input);
            output += letter;
        }
        resolve(output)
    })
}

encode("THISISTESTINGMESSAGEIHADTOMAKEITLONGTOBESUREWHEELSROTATECORRECTLYTHISSHOULDBEENOUGH".toUpperCase()).then(output => console.log(output));