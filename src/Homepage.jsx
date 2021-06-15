import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/create">Input</Link>
        </li>
        <li>
          <Link to="/display">Display</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
