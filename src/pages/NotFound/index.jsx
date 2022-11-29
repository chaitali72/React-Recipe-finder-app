import "./styles.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="main">
      <div className="content">
        <h1>Error 404</h1>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default NotFound;
