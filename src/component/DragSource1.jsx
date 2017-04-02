import React, { Component } from 'react';
import './dragSource.css';
import { DragTypes } from "../constants/types.js"; 
import { DragSource } from 'react-dnd';

const objectspec = {
  beginDrag(props){
  	console.log("begin drag" + props);
    return {};	
  }
};

function collect(connect, monitor) { 
  console.log("collect of drag source being called");	
  return { 
  		     connectDragSource: connect.dragSource(), 
  		     isDragging: monitor.isDragging() 
  } 
}  

class DragSource1 extends Component {

  render(){
  	console.log("render before collect drag source")
  	const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className="object">
        <p className="objectprop"> Obejct1 </p>
      </div> , {dropEffect: 'move'}
    ); 
  }
}

export default DragSource(DragTypes.OBJECT, objectspec, collect)(DragSource1);