// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADf6J56KISmWD5tMSlP8HMZ6LUP5LUk88",
  authDomain: "prime-news-ec9d8.firebaseapp.com",
  projectId: "prime-news-ec9d8",
  storageBucket: "prime-news-ec9d8.appspot.com",
  messagingSenderId: "973880962080",
  appId: "1:973880962080:web:aca57855edae39a0cce045",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
