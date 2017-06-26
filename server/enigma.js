function enigma(wheels) {
    this.plugboard = {
        input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        output: "EKMFLGDQVZNTOWYHXUSPAIBRCJ"
    };
    this.reflector = {
        letters: "ESOVPZJAYQUIRHXLNFTGKDCMWB"
    };
    this.wheels = init(wheels);
    this.enigma = input => encode(input, this.wheels, this.reflector, this.plugboard);
}

//Initial rotor setting depending on starting position
function init(wheels) {
    return wheels.map(wheel => {
        let letters = wheel.letters.split("");
        let spliced = letters.splice(0, wheel.position);
        wheel.letters = letters.concat(spliced);
        return wheel;
    });
}

//Rotate rotors. Time clock style.
function rotate(wheels) {
    for (let wheel of wheels) {
        if (wheel.position < 26) {
            wheel.position++;
            wheel.letters.push(wheel.letters.shift());
            break;
        } else {
            wheel.position = 0;
            wheel.letters.push(wheel.letters.shift());
        }
    }
}
//Compare two arrays of letters
function swap(letter, input, output) {
    return input[output.indexOf(letter)];
}

//Encode message
//TODO: Write function for wheels passage (forwards and backwards)
//So it would be possible to have as many rotors as you desire.
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