import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry, the resource you're looking for does not exist!</h2>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFound;
