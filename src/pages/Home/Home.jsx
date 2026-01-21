import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovie } from 'services/api';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetchTrendingMovies()
            .then(data => setMovies(data.results))
            .catch(console.error);
            
    }, []);
    return (
        <>
            <h1> Trending today</h1>
            {isLoading && <p>Loading...</p>}
            <MovieList movies={movies} />
        </>
    );
}
