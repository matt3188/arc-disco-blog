import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { getPosts } from "./utils/api";

import Header from "./Header";
import Home from "./Home";
import Post from "./Post";

class App extends Component {
  state = {
    posts: [],
    loading: true
  };

  componentWillMount() {
    getPosts().then(response =>
      this.setState({ posts: response, loading: false })
    );
  }
  getPostById(id) {
    return this.state.posts.filter(item => id === item.id.toString())[0];
  }

  render() {
    const { posts, loading } = this.state;
    console.log(loading);

    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <div className="app">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} loading={loading} posts={posts} />
            )}
          />
          <Route
            path="/:id"
            render={props => (
              <Post
                {...props}
                loading={loading}
                post={this.getPostById(props.match.params.id)}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
