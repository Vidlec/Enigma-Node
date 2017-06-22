function enigma(wheels) {
    this.plugboard = {
        input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        output: "EKMFLGDQVZNTOWYHXUSPAIBRCJ"
    };
    this.reflector = {
        letters: "ESOVPZJAYQUIRHXLNFTGKDCMWB"
    };
    this.wheels = wheels;
    this.enigma = (input) => {
        return encode(input, this.wheels, this.reflector, this.plugboard);
    };
    this.reset = () =>{
        init(this.wheels);
    };
    init(this.wheels);
}

function init(wheels) {
    for (let wheel of wheels) {
        let letters = wheel.letters.split("");
        let spliced = letters.splice(0, wheel.position);
        letters = letters.concat(spliced);
        wheel.letters = letters.join("");
    }
}

function rotate(wheels) {
    for (let wheel of wheels) {
        if (wheel.position < 25) {
            wheel.position++;
            let letters = wheel.letters.split("");
            let letter = letters.shift();
            letters.push(letter);
            wheel.letters = letters.join("");
            break;
        } else {
            wheel.position = 0;
            let letters = wheel.letters.split("");
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
function encode(input, wheels, reflector, plugboard) {
    return new Promise((resolve, reject) => {
        let output = "";
        for (let letter of input) {

            //Rotate wheels once BEFORE encoding
            rotate(wheels);
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
            letter = swap(letter, reflector.letters, reflector.letters.split("").reverse().join(""), 0);

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
        resolve(output);
    });
}
module.exports = enigma;