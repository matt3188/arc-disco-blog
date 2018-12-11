import React, { Component } from "react";
import { Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { getPosts } from "./utils/api";

import Routes from "./Routes";
import Header from "./Header";

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

  render() {
    const { posts, loading } = this.state;

    return (
      <div className="app">
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes posts={posts} loading={loading} />
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
