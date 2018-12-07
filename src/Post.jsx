import React from "react";

const Post = ({ post, loading }) => (
  <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          {console.log(post)}
          {loading ? (
            "Loading..."
          ) : (
            <div>
              <h1>{post.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Post;
