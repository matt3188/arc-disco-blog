import React from "react";

const Post = ({ post, loading }) => (
  <React.Fragment>
    <div className="container">
      {loading ? (
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>{post.title.rendered}</h1>

          {post.acf.feature_image && (
            <img
              src={post.acf.feature_image.url}
              className="card-img-top mt-4 mb-4"
              alt=""
            />
          )}

          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      )}
    </div>
  </React.Fragment>
);

export default Post;
