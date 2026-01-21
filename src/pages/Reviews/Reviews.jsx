import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);

    fetchMovieReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;
  if (reviews.length === 0) return <p> No reviews yet.</p>;

  return (
    <ul className={styles.list}>
      {reviews.map(review => (
        <li key={review.id} className={styles.item}>
          <p>
            <b>Author: {review.author}</b>
          </p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

// // ЗАГЛУШКА без ключа
// import styles from './Reviews.module.css'

// export default function Reviews() {
//     const mockReviews = [
//         { id: 1, author: 'User1', content: 'Loved it!' },
//         {id:2, author:'User2', content: 'Not bad'},
//     ]
//     return (
//         <div>
//             <h3>Reviews</h3>
//             <ul className={styles.list}>
//                 {mockReviews.map(review => (
//                     <li key={review.id} className={styles.item}>
//                         <b>{review.author}:</b>
//                         {review.content}
//                     </li>
//                 ))}

//             </ul>
//         </div>
//     );
// }
