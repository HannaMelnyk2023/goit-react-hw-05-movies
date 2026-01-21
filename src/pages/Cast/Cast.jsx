import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "services/api";
import styles from './Cast.module.css';

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
            .catch(error =>
                setError(error.message))
            .finally(() => setIsLoading(false));
    }, [movieId]);

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (cast.length === 0) return <p> No cast information.</p>;

    return (
         <div>
            <h3>Cast</h3>
             <ul className={styles.list}>
                {cast.map(actor => (
                   <li key={actor.id} className = {styles.item}>
                        <p><b>{actor.name}</b></p>
                        <p>Character: {actor.character}</p>
                    </li>
                 ))}
             </ul>
         </div>
        
    )

}


// // ЗАГЛУШКА без ключа
// import styles from './Cast.module.css'
// export default function Cast() {
//     const mockCast = [
//         { id: 1, name: 'actor1', character: 'Hero' },
//         {id: 2, name: 'actor2', character: 'Villain'},
//     ]
//     return (
//         <div>
//             <h3>Cast</h3>
//             <ul className={styles.list}>
//                 {mockCast.map(actor => (
//                     <li key={actor.id} className = {styles.item}>
//                         {actor.name} as {actor.character}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }