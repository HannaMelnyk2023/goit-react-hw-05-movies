// ЗАГЛУШКА без ключа
import styles from './Reviews.module.css'

export default function Reviews() {
    const mockReviews = [
        { id: 1, author: 'User1', content: 'Loved it!' },
        {id:2, author:'User2', content: 'Not bad'},
    ]
    return (
        <div>
            <h3>Reviews</h3>
            <ul className={styles.list}>
                {mockReviews.map(review => (
                    <li key={review.id} className={styles.item}>
                        <b>{review.author}:</b>
                        {review.content}
                    </li>
                ))}

            </ul>
        </div>
    );
}