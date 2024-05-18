// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgwRsdgjGqIPXIu-kLy0CqXvETPs0ksdg",
  authDomain: "netflixgpt-8c30b.firebaseapp.com",
  projectId: "netflixgpt-8c30b",
  storageBucket: "netflixgpt-8c30b.appspot.com",
  messagingSenderId: "2413369776",
  appId: "1:2413369776:web:b8000b4b42ff56140ade75",
  measurementId: "G-NV0SVJE7VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();