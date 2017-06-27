import React, {Component} from "react";
import { DropTarget } from "react-dnd";

const rotorTarget = {
  drop(props, monitor) {
    moveRotor(props.index,monitor.getItem());
  }
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Slot extends Component{
    render(){
        const {connectDropTarget, isOver} = this.props;
        const status = (isOver) ? "selected" : "notSelected";
        return connectDropTarget(<div className={status + " slot"}>
                {this.props.children}
            </div>);
    }
}
export default DropTarget("rotor", rotorTarget, collect)(Slot);