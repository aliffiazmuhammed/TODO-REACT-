//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

import React from "react";

function App() {
  const [inputText,setinputText] = React.useState("")
  const [items,setItems] = React.useState([]);
  function inputChange(event){
    const inputValue = event.target.value;
    setinputText(inputValue);
  }
  function addItem(){
    setItems((prevvalue)=>{
      return [...prevvalue,inputText]
    })
    setinputText("")
  }

  return (

    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={inputChange} value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((item)=>{
          return <li>{item}</li>
        })}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
