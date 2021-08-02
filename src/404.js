import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry Fella</h2>
            <p>The page you are looking for does not exist!</p>
            <Link to="/">Come back to the home page</Link>
        </div>
    );
}
 
export default NotFound;