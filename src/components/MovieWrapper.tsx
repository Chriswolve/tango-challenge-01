import { useState } from "react";
import MovieGrid from "./MovieGrid";
import MovieSearch from "./MovieSearch";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const MovieWrapper = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!query.trim()) {
      return;
    }
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );

      setMovies(data.Search || []);
    } catch (err) {
      console.error("Error to seek movies", err);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <MovieSearch 
        query={query}
        onQueryChange={setQuery}
        onSearch={searchMovies}
        />
      <MovieGrid movies={movies} />
    </div>
  );
};

export default MovieWrapper;
