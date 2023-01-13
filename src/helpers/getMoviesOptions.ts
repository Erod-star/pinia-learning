import moviesApi from "../api/moviesApi";

const getPopularMovies = async () => {
  const { data } = await moviesApi.get(`/popular?api_key=${apiKey}&page=1`);
  console.log(data.results);
  // console.log(data.results[0].backdrop_path);
  // console.log(
  //   `https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`
  // );
  return data;
};

export default getPopularMovies;
