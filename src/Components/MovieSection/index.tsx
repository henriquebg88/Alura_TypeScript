import React, { useEffect, useState } from "react";
import Styles from "./MovieSection.module.css";
import FieldSet from "../FieldSet";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import type { Movie } from "../../Types";
import { getMovies } from "../../api";

const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <main>
      <section className={Styles.container}>
        <FieldSet variant="Secondary">
          <InputText placeholder="Buscar filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </FieldSet>
        <h1 className={Styles.titulo}>Em cartaz</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default MovieSection;
