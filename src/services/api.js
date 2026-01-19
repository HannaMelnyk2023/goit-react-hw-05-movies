export const fetchTrending = () =>
    Promise.resolve([
        { id: 1, title: 'Avatar', poster_path: '/fake1.jpg' },
        { id: 2, title: 'Inception', poster_path: '/fake2.jpg' },
        { id: 3, title: 'Interstellar', poster_path: '/fake3.jpg' },
    ]);

export const searchMovies = query =>
    Promise.resolve([
        { id: 10, title: `Result for "${query}"`, poster_path: '/fake4.jpg' },
    ]);

export const getMovieDetails = id =>
    Promise.resolve({
        id,
        title: `Movie ${id}`,
        overview: 'Fake description for testing routing.',
        genres: [{ id: 1, name: 'Drama' }],
    });

export const getMovieCredits = () =>
    Promise.resolve([
        { id: 1, name: 'Leonardo DiCaprio', character: 'Main role' },
    ]);

export const getMovieReviews = () =>
    Promise.resolve([
        { id: 1, author: 'John', content: 'Great fake review!' },
    ]);

// import for page:
// import {
//     fetchTrending,
//     searchMovies,
//     getMovieDetails,
//     getMovieCredits,
//     getMovieReviews,
// } from '../../services/fakeApi';