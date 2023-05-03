// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ7rS2xVemq8UqJSrRQsKVeN0is-McoVg",
  authDomain: "the-news-dragon-client-37743.firebaseapp.com",
  projectId: "the-news-dragon-client-37743",
  storageBucket: "the-news-dragon-client-37743.appspot.com",
  messagingSenderId: "269368196671",
  appId: "1:269368196671:web:4c31e3e6c8b9f1a637c28a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app