import {
  useParams,
  Outlet,
  NavLink,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../services/api';
import styles from './MovieDetails.module.css';
import noImage from '../../images/no-image.png';
// import Reviews from 'pages/Reviews/Reviews';

const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const backLink = location.state?.from || '/';

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return <p>Loading movie details...</p>;

   const poster = movie.poster_path
    ? `${POSTER_URL}${movie.poster_path}`
    : noImage;

  return (
    <div className={styles.container}>
      <Link to={backLink} className={styles.backLink}>
        {' '}
        Go BACK{' '}
      </Link>
      <div className={styles.wrapper}>
        <img src={poster} alt={movie.title} className={styles.poster} />
      </div>
      <div>
        {' '}
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>

      <NavLink to="cast" className={styles.nav}>
        Cast
      </NavLink>
      <NavLink to="reviews" className={styles.nav}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
}
