import axios from "axios";

const moviesApi = axios.create({
  //TODO: Change for real endpoint
  baseURL: "https://api.themoviedb.org/3/movie/",
});

export default moviesApi;
