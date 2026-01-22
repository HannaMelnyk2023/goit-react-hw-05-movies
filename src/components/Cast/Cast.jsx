import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import styles from './Cast.module.css';
import noImage from '../../images/no-image.png';

const PROFILE_URL = 'https://image.tmdb.org/t/p/w200';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);

    fetchMovieCredits(movieId)
      .then(data => setCast(data.cast))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (cast.length === 0) return <p> No cast information.</p>;

  return (
    <div>
      <h3>Cast</h3>
      <ul className={styles.list}>
        {cast.map(actor => {
          const photo = actor.profile_path
            ? `${PROFILE_URL}${actor.profile_path}`
            : noImage;
          return (
            <li key={actor.id} className={styles.item}>
              <img src={photo} alt={actor.name} width="100" />
              <p>
                <b>{actor.name}</b>
              </p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
