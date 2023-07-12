// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANTmf-MKHzZz-jTC1wFFMHdyf-SbuSG2w",
  authDomain: "myblogapp-project.firebaseapp.com",
  projectId: "myblogapp-project",
  storageBucket: "myblogapp-project.appspot.com",
  messagingSenderId: "537138515480",
  appId: "1:537138515480:web:3412818148e12a0d5e3d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();