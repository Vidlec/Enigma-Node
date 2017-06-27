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


class Enigma extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rotors: config.rotors,
            lamps: config.lamps,
            keys: config.keyboard,
            choseSlots: config.choseSlots,
            selectedSlots: config.selectedSlots,
            rotorsSelected: 0
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.createEnigma = this.createEnigma.bind(this);
        this.handleRotorSetting = this.handleRotorSetting.bind(this);
        this.handleRotorSelect = this.handleRotorSelect.bind(this);
    }

    componentDidMount(){
        socket.on("lamp",(lamp)=>{
            this.lightLamp(lamp); 
        });
    }
    
    handleKeyPress(e){
        
        if(this.state.rotorsSelected === 3){
            socket.emit("encrypt", e.target.getAttribute("data-letter"));
            this.setState(rotate(this.state.rotors.filter(rotor => rotor.selected)));
        }
        else{
            alert("You have to select 3 rotors");
        }
    }
    createEnigma(){
            socket.emit("create-enigma", this.state.rotors.filter(rotor => rotor.selected));
    }
    lightLamp(letter){
        let state = this.state;
        state.lamps.map((lamp) => {
            (letter === lamp.letter)? lamp.glowing = "glowing" : lamp.glowing = "dim"; 
        });
        this.setState(state);
    }

    handleRotorSetting(index, method){
        let state = this.state;
        (method === "add") ?
        state.choseSlots[index].rotor.position < 26 ? state.choseSlots[index].rotor.position++ : state.choseSlots[index].rotor.position = 1 :
        state.choseSlots[index].rotor.position > 1 ? state.choseSlots[index].rotor.position-- : state.choseSlots[index].rotor.position = 26;

        this.setState(state);
        (this.state.rotorsSelected === 3) && this.createEnigma();
    }

    handleRotorSelect(e){
        let index = e.target.getAttribute("data-index");
        let state = this.state;
        if(e.target.classList.value.indexOf("visible") != -1){
            e.target.classList.remove("visible");
            state.rotors[index].selected = false;
            state.rotorsSelected--;
        } 
        else if(this.state.rotorsSelected != 3){
            e.target.classList.add("visible");
            state.rotors[index].selected = true;
            state.rotorsSelected++;
        } 
        this.setState(state);
        (this.state.rotorsSelected === 3) && this.createEnigma();
    }
    updateInfo(){
        //TODO: infopanel
    }

    render() {
        return(
            <div id="main">
                <Settings 
                    choseSlots={this.state.choseSlots} 
                    handleRotorSelect={this.handleRotorSelect} 
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
        );
    }
}

function rotate(rotors) {
    for (let rotor of rotors) {
        if (rotor.position < 26) {
            rotor.position++;
            break;
        } else {
            rotor.position = 1;
        }
    }
    return rotors;
}
export default DragDropContext(HTML5Backend)(Enigma);