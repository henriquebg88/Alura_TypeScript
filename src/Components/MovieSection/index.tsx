import React from "react";
import Styles from "./MovieSection.module.css";
import FieldSet from "../FieldSet";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import { movies } from "../../Mock/data";

const MovieSection = () => {
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
