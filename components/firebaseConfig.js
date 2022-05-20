// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrzcGpaAaBgJtTYu3TLDMgTTz_jg6UJVc",
  authDomain: "gogo-clothing.firebaseapp.com",
  projectId: "gogo-clothing",
  storageBucket: "gogo-clothing.appspot.com",
  messagingSenderId: "1023335519564",
  appId: "1:1023335519564:web:9deb093d8b8edf6e726be9",
  measurementId: "G-8WH4566KXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);