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
// import Reviews from 'pages/Reviews/Reviews';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const backLink = location.state?.from || '/';

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie).catch(console.error);
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
