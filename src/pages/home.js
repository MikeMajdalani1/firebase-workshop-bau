import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
function Home() {
  const [user] = useAuthState(auth);

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="home">
      {!user && <p>Please Signup or Login to continue.</p>}
      <div>
        {!user && (
          <>
            {' '}
            <Link to="/signup">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-secondary">Login</button>
            </Link>
          </>
        )}

        {user && (
          <button onClick={logOut} className="btn btn-secondary">
            Sign Out
          </button>
        )}

        {user && <h1>Welcome {user.email} </h1>}
      </div>
    </div>
  );
}

export default Home;
