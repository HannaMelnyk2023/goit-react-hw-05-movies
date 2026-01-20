import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();

  const backLink = location.state?.from || '/';

  const mockMovie = {
    id: movieId,
    title: `Movie ${movieId}`,
    overview: 'This is a fake movie description. Soon we will fetch real data!',
    release_date: '2026-01-20',
    genres: ['Action', 'Adventure'],
  };

  return (
    <div className={styles.container}>
      <Link to={backLink} className={styles.backLink}>
        {' '}
        Go BACK{' '}
      </Link>
      <h2>{mockMovie.title}</h2>
      <p>{mockMovie.overview}</p>
      <p>Release date: {mockMovie.release_date}</p>
      <p>Genres: {mockMovie.genres.join(', ')}</p>
      <nav className={styles.nav}>
        <Link to={`cast`}>Cast</Link> |<Link to={`reviews`}>Reviews</Link>
      </nav>
      <Outlet />
      {/* сюди рендериться Cast & Reviews */}
    </div>
  );
}
