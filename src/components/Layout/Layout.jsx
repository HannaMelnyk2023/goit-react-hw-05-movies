import { NavLink, Outlet } from 'react-router-dom';
export default function Layout() {
    return (
        <>
            <header> 
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
        
    );
}