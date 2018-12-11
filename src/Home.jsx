import React, { Component } from "react";

import PostPreview from "./PostPreview";

class Home extends Component {
  render() {
    const { loading, posts } = this.props;
    console.log(loading);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-columns">
              {loading
                ? "Loading..."
                : posts.map(post => <PostPreview key={post.id} {...post} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
