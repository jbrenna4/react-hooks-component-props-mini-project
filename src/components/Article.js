import React from "react";

function Article({ title, date, preview }) {

    const dd = date

    const ifTrue = <small>{date}</small>
    const ifFalse = <small>January 1, 1970</small>
    
    return (
        <article>
            <h3>{title}</h3>
                {dd ? ifTrue : ifFalse}
            <p>{preview}</p>
        </article>

    );
  }
  
  export default Article;