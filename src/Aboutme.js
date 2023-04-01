import React from "react";
import Sectiontittle from "./Sectiontittle";
import Sectiontext from "./Sectiontext";
import "./Aboutme.css";

function Aboutme({ aboutme }){
  return(
    <div id="aboutmeFrame">
      <div id="aboutmeInfo">
        <Sectiontittle id="aboutmeTittle" tittle={aboutme.tittle} /> 
        <Sectiontext text={aboutme.text} />
      </div>
      <img src={require(`${aboutme.image}`)}></img>
    </div>
  );
}

export default Aboutme;
