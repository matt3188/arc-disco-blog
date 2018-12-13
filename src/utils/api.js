import axios from "axios";

const api_url = "https://www.arcdisco.co.uk/wp-json/wp/v2";

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
    .get(`${api_url}/pages`, {
      params: {
        _sort: "createdAt:asc"
      }
    })
    .then(response => response.data)
    .catch(error => {
      console.log("An error occured:", error);
    });
