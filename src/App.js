import React, { useState } from 'react';
import "./styles.css";

export default function App() {
  var [likeCounter, setLikeMe] = useState(0);
  function clickHandler(){
    likeCounter = likeCounter + 1;
    setLikeMe(likeCounter);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <button onClick={clickHandler}>Like Me</button>{likeCounter}
    </div>
  );
}
