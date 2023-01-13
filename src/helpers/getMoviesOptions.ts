import moviesApi from "../api/moviesApi";

const apiKey = "b7cd029b627cfa216b53bd720366cd51";

const getPopularMovies = async () => {
  const { data } = await moviesApi.get(`/popular?api_key=${apiKey}&page=1`);
  console.log(data.results);
  // console.log(data.results[0].backdrop_path);
  // console.log(
  //   `https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`
  // );
  const popularMovies = data.results;
  return popularMovies;
};

export default getPopularMovies;
