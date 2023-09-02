import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("Mazin Salih"));
  const [text, setText] = useState("Mazin Salih")

  const handleClick = () => {
    if (text === "Mazin Salih") {
     return setText("Ameera Adil")
    } else {
     return setText("Mazin Salih")
    }
  }
  return (
    <React.Fragment>
      <h1> {text} </h1>
      <button type="button" className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
