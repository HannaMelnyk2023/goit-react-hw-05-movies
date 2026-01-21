import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import MovieList from '../../components/MovieList/MovieList';


export default function Home() {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        fetchTrendingMovies()
            .then(data => setMovies(data.results))
            .catch(console.error);
            
    }, []);
    return (
        <>
            <h1> Trending today</h1>
            <MovieList movies={movies} />
        </>
    );
}
