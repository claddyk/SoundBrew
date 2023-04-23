import { useState } from "react";
import "./styles.css";

export default function App2() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  return (
    <div className="container">
      <div className={`form-container ${showLogin ? "login" : "signup"}`}>
        <div className="form-toggle">
          <button onClick={handleLoginClick} className={showLogin ? "active" : ""}>
            Log in
          </button>
          <button onClick={handleSignupClick} className={!showLogin ? "active" : ""}>
            Sign up
          </button>
        </div>
        {showLogin ? (
          <LoginForm />
        ) : (
          <SignupForm />
        )}
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <form className="form">
      <h2>Log in</h2>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

function SignupForm() {
  return (
    <form className="form">
      <h2>Sign up</h2>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <label>
        Confirm Password
        <input type="password" />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}
