import React, {Component} from 'react';

class Keyboard extends Component{
    
  render(){
    return(
      <ul id="keyboard">
        { Object.keys(this.props.keys).map(rowName => 
          <div id={rowName}>
            {this.props.keys[rowName].split('').map((letter,i)=>
              <li 
                className="letter"
                onClick={this.props.handleKeyPress}
                key={i}
                data-index={i}
                data-letter={letter}>{letter}
              </li>)}
          </div>
        )}
      </ul>
    );
  }
}
export default Keyboard;
