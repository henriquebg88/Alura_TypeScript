import type { Movie } from "../../Types";
import CardMovie from "../CardMovie";
import Styles from "./MovieList.module.css";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={Styles.lista}>
      {movies.map((movie: Movie) => (
        <CardMovie key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
