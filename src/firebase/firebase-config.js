import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9Ifgy9lAQcSgebw4W3T9OPtxfqKzW7Vo",
  authDomain: "react-app-cursos-4e22f.firebaseapp.com",
  projectId: "react-app-cursos-4e22f",
  storageBucket: "react-app-cursos-4e22f.appspot.com",
  messagingSenderId: "543435844453",
  appId: "1:543435844453:web:f17a67400b0999a49b0f8c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}