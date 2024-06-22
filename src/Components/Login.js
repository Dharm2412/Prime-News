import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQHKps6SLjFLgOS9goVHkxs9sqcurZnSE",
  authDomain: "to-do-list-cf9c2.firebaseapp.com",
  projectId: "to-do-list-cf9c2",
  storageBucket: "to-do-list-cf9c2.appspot.com",
  messagingSenderId: "247312395160",
  appId: "1:247312395160:web:d6bca5de50635d34d299ed",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login() {
  const provider = new GoogleAuthProvider();

  const signin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      alert(error.message);
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
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
