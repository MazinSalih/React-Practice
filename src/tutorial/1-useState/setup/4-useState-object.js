import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Mazin Salih",
    age: 31,
    job: "Frontend Developer",
  });
  const changeMessage = () => {
    setPerson({
      name: "Ameera Adil",
      age: 30,
      job: "My life",
    });
  }
  console.log(person)
  return (
    <>
      <h1> {person.name} </h1>
      <h4> {person.age} </h4>
      <h3> {person.job} </h3>
      <button className="btn" onClick={changeMessage}>change role</button>
    </>
  );
};

export default UseStateObject;
