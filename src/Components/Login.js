import React from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful Google sign-in
        console.log("Google sign-in successful:", result.user.email);
        alert("Google sign-in successful");
        // Optionally, redirect the user
      })
      .catch((error) => {
        console.error("Google sign-in error:", error.code, error.message);
        alert(`Google sign-in failed: ${error.message}`);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login Form</h2>
        <div className="login-register">
          <a
            href="https://your-login-page.com" // Replace with your login page URL
            className="login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <a
            href="https://your-signup-page.com" // Replace with your signup page URL
            className="register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Signup
          </a>
        </div>
        {/* Remove form element as it's not used here */}
        {/* <form className="form">
          <input type="email" placeholder="Email Address" className="email" />
          <input type="password" placeholder="Password" className="password" />
        </form> */}
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
        <button onClick={googleSignIn} type="submit" className="login-btn">
          Login with Google
        </button>
        <div className="footer-card">
          <p>Not a member?</p>
          <a href="#">Signup now</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
