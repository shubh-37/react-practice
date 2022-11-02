import React, { useState } from 'react';
import "./styles.css";

export default function App() {
  const emojiDict = {
    "🤗":"hugging",
    "🤩": "over-excited",
    "🥱": "yawning",
    "😫": "disgusted",
    "😛": "teasing",
    "🤤": "drooling",
    "😲": "shocked",
    "🤑": "money-time"
  }
  var [meaning, setMeaning] = useState("");
  function inputHandler(event){
     var input = event.target.value;
     meaning = emojiDict[input];
     setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange = {inputHandler}></input>
      <div>{meaning}</div>
    </div>
  );
}
