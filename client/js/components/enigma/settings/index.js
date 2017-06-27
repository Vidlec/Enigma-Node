import React, {Component} from "react";
import Rotor from "./rotor";
import Slot from "./slot";

class Settings extends Component{
    render(){
        return(
            <div id="settings">
                <ul id="rotors">
                {this.props.choseSlots.map((slot,i)=>
                    <Rotor 
                    rotor={slot.rotor} 
                    key={i} 
                    index={i} 
                    handleRotorSelect={this.props.handleRotorSelect} 
                    handleRotorSetting={this.props.handleRotorSetting}>
                    </Rotor>)}
                </ul>
                <ul id="slots"> 
                    <Slot selected={false}></Slot>
                    <Slot selected={false}></Slot>
                    <Slot selected={false}></Slot>
                </ul>
            </div>
        );
    }
}

export default Settings;