import React, { Component } from "react";
import axios from "axios";

import Post from "./Post";

import "./App.css";

class App extends Component {
  state = {
    posts: [],
    loading: true
  };

  componentWillMount() {
    const api_url = "https://www.arcdisco.co.uk/wp-json/wp/v2/posts";

    axios
      .get(`${api_url}`, {
        params: {
          _sort: "createdAt:desc"
        }
      })
      .then(response => {
        this.setState({ posts: response.data, loading: false });
      })
      .catch(error => {
        console.log("An error occured:", error);
      });
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <div className="App">
        <header className="c-header">
          <h1>Welcome</h1>
          {loading
            ? "Loading..."
            : posts.map(post => <Post key={post.id} {...post} />)}
        </header>
      </div>
    );
  }
}

export default App;
