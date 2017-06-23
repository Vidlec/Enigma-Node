import React, {Component} from "react";
import ReactDOM from "react-dom";


class Rotor extends Component{
    render(){
        return(
            <li className="rotor">
                <div className="label">{this.props.rotor.label}</div>
                <i  className="fa fa-caret-up fa-3x" data-direction="add" data-index={this.props.index} onClick={this.props.handleRotorSetting}></i>
                <div id="position">{this.props.rotor.position}</div>
                <i  className="fa fa-caret-down fa-3x " data-direction="dec" data-index={this.props.index} onClick={this.props.handleRotorSetting}></i>
                <div className="select" data-index={this.props.index} onClick={this.props.handleRotorSelect}></div>
            </li>
        );
    }
}
export default Rotor;