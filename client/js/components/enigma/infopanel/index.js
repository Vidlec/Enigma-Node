import React, {Component} from 'react';

class Infopanel extends Component{

  render(){
    return(
      <div id="infopanel">
        <div className="infoText">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
//TODO: Testing todo
//FIXME: Other Test
//TODO: Another todo
export default Infopanel;