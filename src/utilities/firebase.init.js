// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwO6xtX0MNPYmOKc3xrXrA72xIAJ-a5I",
  authDomain: "gerald-blog.firebaseapp.com",
  projectId: "gerald-blog",
  storageBucket: "gerald-blog.appspot.com",
  messagingSenderId: "132697071411",
  appId: "1:132697071411:web:2a2ca2fd41519075966846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;