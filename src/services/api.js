const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export async function fetchTrendingMovies() {
    const responce = await fetch(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );

    if (!responce.ok) {
        throw new Error('Failed to fetch trending movies');
    }

    return responce.json();
}

export async function fetchMovieByQuery(query) {
    const responce = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    if (!responce.ok) {
        throw new Error('Failed to fetch movies');
    }

    return responce.json();
}

export async function fetchMovieDetails(movieId) {
    const responce = await fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );

    if (!responce.ok) {
        throw new Error('Failed to fetch movie details');
    }

    return responce.json();
}

export async function fetchMovieCredits(movieId) {
    const responce = await fetch(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );

    if (!responce.ok) {
        throw new Error('Failed to fetch credits');
    }

    return responce.json();
}

export async function fetchMovieReviews(movieId) {
    const responce = await fetch(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );

    if (!responce.ok) {
        throw new Error('Failed to fetch reviews');
    }

    return responce.json();
}
