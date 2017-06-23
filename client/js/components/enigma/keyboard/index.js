import React, {Component} from "react";

class Keyboard extends Component{
    
    render(){
        return(
             <ul id="keyboard">
                <div id="firstRow">
                    {this.props.keys.firstRow.split("").map((letter,i)=><li className="letter" onClick={this.props.handleKeyPress} key={i} data-index={i} data-letter={letter}>{letter}</li>)}
                </div>
                <div id="secondRow">
                    {this.props.keys.secondRow.split("").map((letter,i)=><li className="letter" onClick={this.props.handleKeyPress} key={i} data-index={i} data-letter={letter}>{letter}</li>)}
                </div>
                <div id="thirdRow">
                    {this.props.keys.thirdRow.split("").map((letter,i)=><li className="letter" onClick={this.props.handleKeyPress} key={i} data-index={i} data-letter={letter}>{letter}</li>)}
                </div>
            </ul>
        );
    }
}
export default Keyboard;
