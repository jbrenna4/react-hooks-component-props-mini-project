import React from "react";
import Article from "./Article.js";

function ArticleList(props) {
    return (
        <main>
          <img src="https://via.placeholder.com/215" alt="blog logo" />
          <p>{props.about}</p>
        </main>
    );
  }
  
  export default ArticleList;