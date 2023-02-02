import React from "react";

function About(props) {

    const image = props.image;

    const ifTrue = <img src={image} alt="blog logo"/>;
    const ifFalse = <img src="https://via.placeholder.com/215" alt="blog logo"/>;

//      <p>{ num === 7 ? ifTrue : ifFalse }</p>
    return (
        <aside>
            {image ? ifTrue : ifFalse}
          <p>{props.about}</p>
        </aside>
    );
  }
  
  export default About;