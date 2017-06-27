import React, {Component} from "react";
import { DragSource } from "react-dnd";

const rotorSource = {
  beginDrag(props) {
    return {
        rotor: props.rotor
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Rotor extends Component{
    render(){
        const { connectDragSource, isDragging } = this.props;
        return(
            connectDragSource(            
                <li style={{opacity: isDragging ? 0.1 : 1, cursor: "move"}} className="rotor">
                <div className="label">{this.props.rotor.label}</div>
                <i  className="fa fa-caret-left fa-3x" 
                    onClick={() => this.props.handleRotorSetting(this.props.index,"dec")}>
                </i>
                <div id="position">{this.props.rotor.position}</div>
                <i  className="fa fa-caret-right fa-3x " 
                    onClick={() => this.props.handleRotorSetting(this.props.index,"add")}>
                </i>
            </li>)
        );
    }
}

export const ItemTypes = {
    ROTOR: "rotor"
};
export default DragSource(ItemTypes.ROTOR,rotorSource,collect)(Rotor);