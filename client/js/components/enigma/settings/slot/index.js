import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';
import Rotor from '../rotor';


const rotorTarget = {
  drop(props, monitor) {
    props.moveRotor(props.index,monitor.getItem(),props.type);
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
    const status = (isOver) ? 'selected' : 'notSelected';
    
    return connectDropTarget(
      <div className={status + ' slot'}>
        {(this.props.rotor != null) && 
            <Rotor
              location={this.props.type}
              rotor={this.props.rotor}  
              index={this.props.index} 
              handleRotorSetting={this.props.handleRotorSetting}>
            </Rotor>}
      </div>);
  }
}
export default DropTarget('rotor', rotorTarget, collect)(Slot);