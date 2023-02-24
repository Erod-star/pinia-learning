export interface movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  genre_ids: Array<number>;
  overview: string;
}
