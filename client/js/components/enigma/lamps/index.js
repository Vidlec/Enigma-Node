import React, {Component} from "react";

class Lamps extends Component{
    
    render(){
        return(
            <ul id="lamps">
                {this.props.lamps.map((lamp,i)=>
                    <li 
                    className={lamp.glowing + " letter"} 
                    key={i} 
                    data-index={i} 
                    data-letter={lamp.letter}>{lamp.letter}
                    </li>)}
                <img id="logo" src="702px-Enigma-logo.svg.png" />
            </ul>
        );
    }
}
export default Lamps;
