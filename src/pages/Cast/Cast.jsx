// ЗАГЛУШКА без ключа
import styles from './Cast.module.css'
export default function Cast() {
    const mockCast = [
        { id: 1, name: 'actor1', character: 'Hero' },
        {id: 2, name: 'actor2', character: 'Villain'},
    ]
    return (
        <div>
            <h3>Cast</h3>
            <ul className={styles.list}>
                {mockCast.map(actor => (
                    <li key={actor.id} className = {styles.item}>
                        {actor.name} as {actor.character}
                    </li>
                ))}
            </ul>
        </div>
    )
}