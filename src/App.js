import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

    return (
      <div className="app">
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <div className="route-section">
                  <Switch>
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
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
