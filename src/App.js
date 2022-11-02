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
  
  var arr = ["shubh","mohit","prateek","dhwani","sidhu","shambi","mayo","aryan"];
  // var [meaning, setMeaning] = useState("");
  // function inputHandler(event){
  //    var input = event.target.value;
  //    meaning = emojiDict[input];
  //    setMeaning(meaning);
  // }
  function getBg(index){
    if(index%2 == 0){
      return "white";
    }else{
      return "gray";
    }
  }
  function clickHandler(item){
    console.log(item);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      {/* <input onChange = {inputHandler}></input>
      <div>{meaning}</div> */}
      <ul>
        {
          arr.map((item,index)=>{
            return(
            <li key= {item} style = {{backgroundColor: getBg(index)}} onClick = {()=>clickHandler(item)}>{item}</li>
            );
            
          })
        }
      </ul>
    </div>
  );
}
