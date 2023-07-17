import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-207738286-1');
ReactGA.pageview(window.location.pathname + window.location.search);

//Replace these when switching from development to production
const app = firebase.initializeApp({
  apiKey: "AIzaSyArIlyorlDE5OcH8Of6iPV9WaEIYDToMNM",
  authDomain: "auth-development-53223.firebaseapp.com",
  projectId: "auth-development-53223",
  storageBucket: "auth-development-53223.appspot.com",
  messagingSenderId: "139315417552",
  appId: "1:139315417552:web:8ca819fcc2287aa8d969d5",
});

const auth = app.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const increment = firebase.firestore.FieldValue.increment;

export { auth, projectStorage, projectFirestore, timestamp, increment };
export default app;
