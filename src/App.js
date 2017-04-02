import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend'; 
import { DragDropContext } from 'react-dnd';
import DragSource1 from './component/DragSource1.jsx';
import DragSource2 from './component/DragSource2.jsx';
import Target from './component/Target.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Target />
         <div className="objects">
           <DragSource1 />
           <DragSource2 />
         </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
