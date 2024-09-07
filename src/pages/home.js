import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <p>Please Signup or Login to continue.</p>
      <div>
        <Link to="/signup">
          <button className="btn btn-primary">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-secondary">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
