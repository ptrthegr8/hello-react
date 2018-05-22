import React, { Component } from 'react';
import './App.css';

class Text extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      color: props.color || "green",
      value: props.value || "Kenzie"
  	}
  }
  render() {
    return (
        <span style={{color: this.state.color}}>{this.state.value}</span>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello, <Text color={"firebrick"} value={"Peter"} /> </h1>
      </div>
    );
  }
}

export default App;
