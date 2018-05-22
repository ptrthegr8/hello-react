import React, { Component } from 'react';
import './App.css';
import Text from './Text.jsx';

// function Text(props) {
//   return (
//     <span style={{color: props.color}}>Hello, {props.children}!</span>
//   );
// };

function App() {
  return (
    <Text color="firebrick"> 
    Peter
    </Text>
  );
};

// class Text extends Component {
//   constructor(props) {
//   	super(props);
//     this.state = {
//       color: props.color || "green",
//       value: props.value || "Kenzie"
//   	}
//   }
//   render() {
//     return (
//         <span style={{color: this.state.color}}>{this.state.value}</span>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Text />
//         <Text color={"rebeccapurple"} value={"Raghava"} />
//         <h1> Hello, <Text color={"firebrick"} value={"Peter"}/> </h1>
//       </div>
//     );
//   }
// }

export default App;
