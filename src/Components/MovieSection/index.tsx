import React, { useEffect, useState } from "react";
import Styles from "./MovieSection.module.css";
import FieldSet from "../FieldSet";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import useFetchMovies from "../../hooks/useFetchMovies";
import useFilterMovies from "../../hooks/useFilterMovies";

const MovieSection = () => {
  const { movies, error, isloading } = useFetchMovies();
  const { filteredMovies, handleSearch, searchTerm, setSearchTerm } =
    useFilterMovies(movies);

  return (
    <main>
      <section className={Styles.container}>
        <FieldSet variant="Secondary">
          <InputText
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar filmes..."
          />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </FieldSet>
        <h1 className={Styles.titulo}>Em cartaz</h1>
        {isloading && <p>Carregando...</p>}
        {error && <p className={Styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;
