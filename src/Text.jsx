import React, { Component } from 'react';

function Text(props) {
    return (
        <marquee behavior="alternate">
             <h1> <span style={{color: props.color}}>Hello, {props.children}!</span> </h1>
        </marquee>
    );
  };
  
export default Text;