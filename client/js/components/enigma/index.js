import React, {Component} from "react";
import ReactDOM from "react-dom";
import {config} from "./config.js";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

import Settings from "./settings";
import Lamps from "./lamps";
import Keyboard from "./keyboard";

class Enigma extends Component() {
    constructor() {
        super();
        this.state = {
            rotors: config.rotors,
            lamps: config.lamps,
            keys: config.keyboard,
            rotorsSelected: 0
        };
    }
    handleKeyPress(e){
        (this.state.rotorsSelected === 3) ? socket.emit("encode", e.letter): alert("You have to select 3 rotors");
    }
    
    createEnigma(){
            let rotors = this.state.rotors.filter((rotor)=>{
                if(rotor.selected){
                    return rotor;
                }
            });
            socket.emit("create-enigma", rotors);
    }

    handleRotorSetting(e){
        let state = this.state;
        (e.val === "up") ? state.rotors[e.rotor].position++ : state.rotors[e.rotor].position--;
        (this.state.rotorsSelected === 3) && this.createEnigma();
    }

    handleRotorSelect(e){
        let state = this.state;
        state.rotors[e.index].selected = true;
        state.rotorsSelected =+ 1;
        this.setState(state);
        (this.state.rotorsSelected === 3) && this.createEnigma();
    }

    render() {
        return(
            <div>
                <Settings rotors={this.state.rotors} handleRotorSelect={this.handleRotorSelect}></Settings>
                <Lamps lamps={this.state.lamps}></Lamps>
                <Keyboard keys={this.state.keys} handleKeyPress={this.handleKeyPress}></Keyboard>            
            </div>
        );
    }
}