import React from "react";
import Sectiontext from "./Sectiontext";
import Sectiontittle from "./Sectiontittle";

import "./Projects.css";

function Projects(props){
  let infoSide, imageSide;
  const projects = props.projects.map(project => {
    if (Number(project.id)%2 != 0){
      infoSide = "right";
      imageSide = "top";
    }
    else{
      infoSide = "left";
      imageSide = "bottom";
    }
    return(
      <div className={"projectFrame " + imageSide} >
        <div className={"projectInfo shadow "+ infoSide}>
          <Sectiontittle tittle={project.tittle} />
          <Sectiontext text={project.text} />
        </div>
        <img className="projectImg shadow " src={require(`${project.image}`)}></img>
      </div> 
    );
  });
  return(
    <div id="projects">
      {projects}
    </div>
  );
}

export default Projects;