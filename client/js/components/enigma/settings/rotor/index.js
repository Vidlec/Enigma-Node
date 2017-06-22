import React, {Component} from "react";
import ReactDOM from "react-dom";


class Rotor extends Component(props){
    render(){
        return(
            <li>
                <div class="label">I</div>
                <i id="inc" class="fa fa-caret-up fa-3x"></i>
                <div id="position">{this.props.position}</div>
                <i id="decr" class="fa fa-caret-down fa-3x"></i>
                <div class="select" onClick={this.props.handleClick}>
                    <i class="fa fa-check" aria-hidden="true"></i>
                </div>
            </li>
        );
    }
}