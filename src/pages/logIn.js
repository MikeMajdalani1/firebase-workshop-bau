import { useState } from 'react';

function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="signup-form">
      <h2>Log into your account</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
          required
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          required
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
}
export default LogInForm;
