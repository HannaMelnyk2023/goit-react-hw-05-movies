import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from 'services/api';
import MovieList from 'components/MovieList/MovieList';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetchMovieByQuery(query)
      .then(data => setMovies(data.results))
      .catch(console.error);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (!value) return;
    setSearchParams({ query: value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>

      <MovieList movies={movies} />
    </>
  );
}
