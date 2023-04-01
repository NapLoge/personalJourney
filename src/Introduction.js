import React from "react";
import "./Introduction.css";

function Introduction(props){
  return(
    <div id="introDiv">
      <img id="introImage" src={props.image}></img>
      <div id="introText">
        <p>Personal Journey</p>
        <p>Software Engineer</p>
      </div>
    </div>
  );
}

export default Introduction;