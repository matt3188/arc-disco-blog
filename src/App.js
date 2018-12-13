import React, { Component } from "react";
import { Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { getPosts, getPages } from "./utils/api";

import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";

class App extends Component {
  state = {
    posts: [],
    pages: [],
    loading: true
  };

  componentWillMount() {
    getPosts().then(response =>
      this.setState({ posts: response, loading: false })
    );
    getPages().then(response => this.setState({ pages: response }));
  }

  render() {
    const { posts, pages, loading } = this.state;

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

        <Footer pages={pages} />
      </div>
    );
  }
}

export default App;
