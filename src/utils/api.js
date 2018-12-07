import axios from "axios";

const api_url = "https://www.arcdisco.co.uk/wp-json/wp/v2/posts";

export const getPosts = () => {
  return axios
    .get(`${api_url}`, {
      params: {
        _sort: "createdAt:desc"
      }
    })
    .then(response => response.data)
    .catch(error => {
      console.log("An error occured:", error);
    });
};

export const getPost = id => {
  return axios
    .get(`${api_url}/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log("An error occured:", error);
    });
};
