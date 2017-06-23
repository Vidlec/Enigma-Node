import React, {Component} from "react";
import ReactDOM from "react-dom";

import Rotor from "./rotor";

class Settings extends Component{
    render(){
        return(
            <div id="settings">
                <ul id="rotors">
                {this.props.rotors.map((rotor,i)=><Rotor rotor={rotor} key={i} index={i} handleRotorSelect={this.props.handleRotorSelect} handleRotorSetting={this.props.handleRotorSetting}></Rotor>)}
                </ul>
            </div>
        );
    }
}

export default Settings;