import React, {Component} from "react";
import ReactDOM from "react-dom";
import {DragDropContext} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";


import {config} from "./config.js";

import io from "socket.io-client";
const socket = io.connect();

import Settings from "./settings";
import Lamps from "./lamps";
import Keyboard from "./keyboard";
import Infopanel from "./infopanel";


class Enigma extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rotors: config.rotors,
            lamps: config.lamps,
            keys: config.keyboard,
            choseSlots: config.choseSlots,
            selectedSlots: config.selectedSlots,
            rotorsSelected: false,
            text: ""

        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.createEnigma = this.createEnigma.bind(this);
        this.handleRotorSetting = this.handleRotorSetting.bind(this);
        this.moveRotor = this.moveRotor.bind(this);
        this.updateSelectedRotors = this.updateSelectedRotors.bind(this);
    }

    componentDidMount(){
        socket.on("lamp",(lamp)=>{
            this.lightLamp(lamp); 
        });
    }
    
    handleKeyPress(e){
        
        if(this.state.rotorsSelected){
            socket.emit("encrypt", e.target.getAttribute("data-letter"));
            this.setState(rotate(this.state.selectedSlots.reduce((rotors,slot) => rotors.concat(slot.rotor),[])));
        }
        else{
            alert("You have to select 3 rotors");
        }
    }
    createEnigma(){
            socket.emit("create-enigma", this.state.selectedSlots.reduce((rotors,slot) => rotors.concat(slot.rotor),[]));
    }
    lightLamp(letter){
        let state = this.state;
        state.text = state.text + letter;
        state.lamps.map((lamp) => {
            (letter === lamp.letter)? lamp.glowing = "glowing" : lamp.glowing = "dim"; 
        });
        this.setState(state);
    }

    handleRotorSetting(index, method, location){
        let state = this.state;
        state.text = "";
        (method === "add") ?
        state[location][index].rotor.position < 26 ? state[location][index].rotor.position++ : state[location][index].rotor.position = 1 :
        state[location][index].rotor.position > 1 ? state[location][index].rotor.position-- : state[location][index].rotor.position = 26;

        this.setState(state);
        (this.state.rotorsSelected) && this.createEnigma();
    }

    updateSelectedRotors(selectedSlots){
       if(selectedSlots.filter(slot => (slot.rotor != null)).length === 3){
           this.setState({rotorsSelected: true,text: ""});
           this.createEnigma();
        } 
        else{
            this.setState({rotorsSelected: false});
        }
    }

    moveRotor(index,rotorProps,to){
        let rotor = rotorProps.rotor;
        let state = this.state;
        let target = state[to][index];
        let source = state[rotorProps.location][rotorProps.index];

        if(!target.rotor){
            target.rotor = rotor;
            source.rotor = null;
        }
        else
        {
            source.rotor = target.rotor;
            target.rotor = rotor;
        }
        this.setState({selectedSlots: state.selectedSlots, choseSlots: state.choseSlots});
        this.updateSelectedRotors(this.state.selectedSlots);
    }
    updateInfo(){
        //TODO: infopanel
    }

    render() {
        return(
            <div id="main">
                <div id="enigma">
                    <Settings 
                        choseSlots={this.state.choseSlots} 
                        slots={this.state.selectedSlots}
                        moveRotor={this.moveRotor}
                        handleRotorSetting={this.handleRotorSetting}>
                    </Settings>
                    <Lamps 
                        lamps={this.state.lamps}>
                    </Lamps>      
                    <Keyboard 
                        keys={this.state.keys} 
                        handleKeyPress={this.handleKeyPress}>
                    </Keyboard>   
                </div>
                <Infopanel 
                    text={this.state.text}>
                </Infopanel>     
            </div>
        );
    }
}

function rotate(rotors) {

    for (let rotor of rotors.reverse()) {
        if (rotor.position < 26) {
            rotor.position++;
            break;
        } else {
            rotor.position = 1;
        }
    }
    return rotors;
}

export default Enigma;