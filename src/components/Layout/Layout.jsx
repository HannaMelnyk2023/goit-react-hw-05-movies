import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
    return (
        <>
            <header className = {styles.header}> 
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </header>
            <main className = {styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>Footer</footer>
        </>
        
    );
}