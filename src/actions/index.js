import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";

const site_url = "https://www.arcdisco.co.uk";
const api_url = `${site_url}/wp-json/wp/v2`;

export const fetchPosts = (post_type = "posts") => dispatch => {
  axios.get(`${api_url}/${post_type}?_embed`).then(response => {
    dispatch({
      type: FETCH_POSTS,
      payload: response.data
    });
  });
};

export const getPosts = () =>
  axios
    .get(`${api_url}/posts`, {
      params: {
        _sort: "createdAt:desc"
      }
    })
    .then(response => response.data)
    .catch(error => {
      console.log("An error occured:", error);
    });

export const getPost = id =>
  axios
    .get(`${api_url}/posts/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log("An error occured:", error);
    });

export const getPages = () =>
  axios
    .get(`${api_url}/pages`)
    .then(response => response.data)
    .catch(error => {
      console.log("An error occured:", error);
    });
