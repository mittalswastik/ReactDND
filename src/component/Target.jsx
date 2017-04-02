import React, { Component } from 'react';
import './dropTarget.css'
import { DragTypes } from '../constants/types.js';
import { DropTarget } from 'react-dnd';

const dropspec = {	
  drop(props){
  	console.log("drop call" + "  "+ this.props);
    return {};
  }
};


function collect(connect, monitor) { 
  console.log("collect  of drop target called");	
  return { 
  		  connectDropTarget: connect.dropTarget(), 
  		  isOver: monitor.isOver() 
  } 
} 


class Target extends Component {
  constructor(props) {
  	super(props); 
  }

  render() {
  	console.log(this.props);
    const {connectDropTarget , isOver} = this.props;
    return connectDropTarget(
      <div className="dropzone">
        <p className="dropprop"> Drop Zone </p>
      </div>	
    );
  }
}

export default DropTarget(DragTypes.OBJECT, dropspec, collect)(Target);