import React, {Component} from 'react';

class Infopanel extends Component{

  render(){
    return(
      <div id="infopanel">
        <div className="infoText">
          {this.props.text.map(row => <p>{row}</p>)}
        </div>
      </div>
    );
  }
}
export default Infopanel;
