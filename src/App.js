import React, { useState } from 'react';
import "./styles.css";

export default function App() {
  var [input, setInput] = useState("");
  function inputHandler(event){
     input = event.target.value;
     setInput(input);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange = {inputHandler}></input>
      <div>{input}</div>
    </div>
  );
}
