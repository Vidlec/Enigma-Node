import React, {Component} from "react";
import { DragSource } from "react-dnd";

const rotorSource = {
  beginDrag(props) {
    return props;
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
        const topMethod = (this.props.location === "selectedSlots") ? "add" : "dec";
        const botMethod = (this.props.location === "selectedSlots") ? "dec" : "add";
        return(
            connectDragSource(            
                <li style={{opacity: isDragging ? 0.3 : 1, cursor: "move"}} className="rotor">
                <div className="label">{this.props.rotor.label}</div>
                <i  className={(this.props.location === "selectedSlots") ? "fa-caret-up fa fa-3x" : "fa-caret-left fa fa-3x"}
                    onClick={() => this.props.handleRotorSetting(this.props.index,topMethod,this.props.location)}>
                </i>
                <div id="position">{this.props.rotor.position}</div>
                <i  className={(this.props.location === "selectedSlots") ? "fa-caret-down fa fa-3x" : "fa-caret-right fa fa-3x"}
                    onClick={() => this.props.handleRotorSetting(this.props.index,botMethod,this.props.location)}>
                </i>
            </li>)
        );
    }
}

export const ItemTypes = {
    ROTOR: "rotor"
};
export default DragSource(ItemTypes.ROTOR,rotorSource,collect)(Rotor);