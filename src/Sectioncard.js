import React from "react";
import "./Sectioncard.css";

function Sectioncard(props){
  return (
    <div id="sectionCard">
      <p id="sectioncardName">{props.sectioncardName}</p>
      <div>{props.component}</div>
    </div>
  );
}

export default Sectioncard;