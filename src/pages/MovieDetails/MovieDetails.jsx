import { useParams, Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails} from '../../services/api';
import styles from './MovieDetails.module.css';
// import Reviews from 'pages/Reviews/Reviews';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const backLink = location.state?.from || '/';

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(console.error)
  }, [movieId]);

  if (!movie) return <p>Loading movie details...</p>;

  return (
    
        <div className={styles.container}>
      <Link to={backLink} className={styles.backLink}>
        {' '}
        Go BACK{' '}
      </Link>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>

      <NavLink to="cast" className={styles.nav}>Cast</NavLink>
      <NavLink to="reviews" className={styles.nav}>Reviews</NavLink>
       <Outlet />
    </div>
  )
}

  // const mockMovie = {
  //   id: movieId,
  //   title: `Movie ${movieId}`,
  //   overview: 'This is a fake movie description. Soon we will fetch real data!',
  //   release_date: '2026-01-20',
  //   genres: ['Action', 'Adventure'],
  // };

//   return (
//     <div className={styles.container}>
//       <Link to={backLink} className={styles.backLink}>
//         {' '}
//         Go BACK{' '}
//       </Link>
//       <h2>{mockMovie.title}</h2>
//       <p>{mockMovie.overview}</p>
//       <p>Release date: {mockMovie.release_date}</p>
//       <p>Genres: {mockMovie.genres.join(', ')}</p>
//       <nav className={styles.nav}>
//         <Link to={`cast`}>Cast</Link> |<Link to={`reviews`}>Reviews</Link>
//       </nav>
//       <Outlet />
//       {/* сюди рендериться Cast & Reviews */}
//     </div>
//   );
// }
