import moviesApi from "../api/moviesApi";

const apiKey = "b7cd029b627cfa216b53bd720366cd51";

const getPopularMovies = async () => {
  const { data } = await moviesApi.get(`/popular?api_key=${apiKey}&page=1`);
  // console.log(data.results);
  const popularMovies = data.results;
  return popularMovies;
};

export const getLatestMovies = async () => {
  const { data } = await moviesApi.get(`/top_rated?api_key=${apiKey}&page=1`);
  console.log(data);
  const latestMovies = data.results;
  return latestMovies;
};

export const getMovie = async (movieId: string | string[]) => {
  const movie = await moviesApi.get(
    `${movieId}?api_key=${apiKey}&language=en-US`
  );
  const casting = await moviesApi.get(
    `${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
  const movieObject = {
    movieInfo: movie.data,
    movieCast: casting.data.cast,
  };
  console.log("::data", movieObject);
  return movieObject;
};

export default getPopularMovies;
