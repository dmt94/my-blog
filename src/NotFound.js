import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <div className="error-div">
        <h2>Sorry</h2>
        <p>Page can't be found.</p>
      </div>
      <Link className="delete-btn" to="/">Back to Home?</Link>
    </div>
   );
}
 
export default NotFound;