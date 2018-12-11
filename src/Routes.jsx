import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Post from "./Post";

const Routes = props => {
  const { loading, posts } = props;

  const getPostById = id => {
    return posts.filter(item => id === item.id.toString())[0];
  };

  return (
    <div className="route-section">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} loading={loading} posts={posts} />}
        />
        <Route
          path="/:id"
          render={props => (
            <Post
              {...props}
              loading={loading}
              post={getPostById(props.match.params.id)}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Routes;
