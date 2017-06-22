import React, {Component} from "react";
import ReactDOM from "react-dom";

import Rotor from "./rotor";

class Settings extends Component(){
    render(){
        return(
            <div>
                <ul>
                {this.props.rotors.map((rotor)=><Rotor rotor={rotor}></Rotor>)}
                </ul>
            </div>
        );
    }
}