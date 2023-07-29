// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ-4OgKskEJlX-ZTyiWCUw3fWcJbFpkrk",
  authDomain: "big-chat-6ae56.firebaseapp.com",
  projectId: "big-chat-6ae56",
  storageBucket: "big-chat-6ae56.appspot.com",
  messagingSenderId: "439144911344",
  appId: "1:439144911344:web:63c9782f732f44e2274d35",
  measurementId: "G-C94ZSJYV9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export {db};