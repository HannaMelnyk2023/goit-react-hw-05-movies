import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

export default function MovieDetails() {
    const { movieId } = useParams();
    const location = useLocation();

    const backLink = location.state?.from || '/';


    return (
        <div>
            <Link to={backLink}> Go BACK </Link>
            <h2>MovieDetais page: {movieId}</h2>
            <nav>
                <Link to="cast">Cast</Link> |
                <Link to ="reviews">Reviews</Link>
            </nav>
            <Outlet />
            {/* сюди рендериться Cast & Reviews */}
        </div>
        
    )
}