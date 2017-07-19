import React, {Component} from 'react';
import Rotor from './rotor';
import Slot from './slot';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class Settings extends Component{
  render(){
    return(
      <div id="settings">
        <ul id="choseSlots"> 
          {this.props.choseSlots.map((slot,i)=>
            <Slot 
              type="choseSlots"
              selected={false} 
              rotor={slot.rotor} 
              index={i} 
              key={i} 
              handleRotorSetting={this.props.handleRotorSetting}
              moveRotor={this.props.moveRotor}>
            </Slot>)}
        </ul>

        <ul id="slots"> 
          {this.props.slots.map((slot,i)=>
            <Slot 
              type="selectedSlots"
              selected={false} 
              rotor={slot.rotor} 
              index={i} 
              key={i} 
              handleRotorSetting={this.props.handleRotorSetting}
              moveRotor={this.props.moveRotor}>
            </Slot>)}
        </ul>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Settings);