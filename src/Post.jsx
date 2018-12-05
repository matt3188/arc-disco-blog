import React from "react";

const Post = props => (
  <React.Fragment>
    <h1>{props.title.rendered}</h1>
    <div dangerouslySetInnerHTML={{ __html: props.content.rendered }} />
  </React.Fragment>
);

export default Post;
