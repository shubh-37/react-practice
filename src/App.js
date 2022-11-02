import React, { useState } from 'react';
import "./styles.css";

export default function App() {
  const emojiDict = {
    "🤗":"hugging",
    "🤩": "over-excited",
    "🥱": "yawning",
    "😫": "disgusted",
    "😛": "teasing",
    "🤤": "mouth-watering",
    "😲": "shocked",
    "🤑": "money-time"
  }
 
 var emojiArr = Object.keys(emojiDict); 
  
  var [meaning, setMeaning] = useState("");
  function inputHandler(event){
     var input = event.target.value;
     meaning = emojiDict[input];
     if(meaning === undefined){
       meaning = "we don't have this in our database";
     }
     setMeaning(meaning);
  }
  function clickHandler(item){
    meaning = emojiDict[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange = {inputHandler}></input>
      <div>{meaning}</div>
      <h3> Emoji's we Know</h3>
      <div>
        {
          emojiArr.map((item)=>{
            return(
            <span key= {item} style= {{padding: "0.5rem", fontSize: "1.5rem", cursor: "pointer"}} onClick = {()=>clickHandler(item)}>{item}</span>
            );
            
          })
        }
      </div>
    </div>
  );
}
