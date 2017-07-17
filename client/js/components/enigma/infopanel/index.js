import React, {Component} from "react";

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
export default Infopanel;
