import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import MovieList from '../../components/MovieList/MovieList';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetchTrending()
            .then(data => setMovies(data))
            .finally(() => setIsLoading(false));
            
    }, []);
    return (
        <>
            <h1> Trending today</h1>
            {isLoading && <p>Loading...</p>}
            <MovieList movies={movies} />
        </>
    );
}
