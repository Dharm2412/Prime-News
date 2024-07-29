import React from "react";
import { auth, provider } from "./Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const signin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Sign-in successful:", result);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("User info:", user);
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <form>
        <div className="mb-3 my-5 text-center">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button onClick={signin} type="button" className="btn btn-primary">
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
}
