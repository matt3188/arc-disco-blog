import React, { Component } from "react";

import PostPreview from "./PostPreview";

class Home extends Component {
  render() {
    const { loading, posts } = this.props;
    console.log(loading);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            {loading
              ? "Loading..."
              : posts.map(post => <PostPreview key={post.id} {...post} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
