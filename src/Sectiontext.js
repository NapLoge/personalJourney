import React from "react";

function Sectiontext(props){
  const text = props.text.map(paragraph => {
    return(    
      <p>{paragraph}</p>
    );
  }

  );

  return(
    <div id="sectionText">
      {text}
    </div>
  );
}

export default Sectiontext;