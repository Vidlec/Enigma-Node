const plugboard = {
    input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    output: "EKMFLGDQVZNTOWYHXUSPAIBRCJ"
}

const wheels = [{
        position: 0,
        letters: "AJDKSIRUXBLHWTMCQGZNPYFVOE"
    },
    {
                position: 0,
        letters: "VZBRGITYUPSDNHLXAWMJQOFECK"
    },
    {
                position: 0,
        letters: "NZJHGRCXMYSWBOUFAIVLPEKQDT"
    }
]

const reflector = 

function rotate(){
    for(let wheel of wheels){
        if(wheel.position < 25){
            wheel.position ++;
            break;
        }
        else{
            wheel.position = 0;
        }
    }
}
for(let i = 0;i<58;i++){
    rotate()
}
console.log(wheels);

function encode(input) {
    for (let letter of input) {
        rotate();
        //Plugboard
        letter = swap(letter,plugboard.output,plugboard.input,0);
        //Firstwheel
        letter = swap(letter,wheels[0].letters,plugboard.output,wheels[0].position);
        //All wheels
        letter = swapWheels(letter);


        console.log(letter);
    }
}

function swap(letter, output, input, position) {
    letter = output[input.indexOf(letter) + position];
    return letter;
}
function reflector(letter){
    //return swap(letter,wheels[wheels.length - 1])
}

function swapWheels(letter){
    for(let i = 0; i < wheels.length - 1; i++){
        letter = swap(letter,wheels[i+1].letters,wheels[i].letters,wheels[i+1].position)
    }
    return letter;
}

encode("aha".toUpperCase());

const parts = [
    {type:"plugboard"}
]