import React from "react";
import Sectiontittle from "./Sectiontittle";
import Sectiontext from "./Sectiontext";
import "./Aboutme.css";

function Aboutme(props){
  return(
    <div id="aboutmeFrame">
      <div id="aboutmeInfo">
        <Sectiontittle id="aboutmeTittle" tittle={props.aboutme.tittle} /> 
        <Sectiontext text={props.aboutme.text} />
      </div>
      <img src={require(`${props.aboutme.image}`)}></img>
    </div>
  );
}

export default Aboutme;