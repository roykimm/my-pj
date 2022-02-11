import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWix3zsPdIikhr8gYTZXgKa_76WXsA2gM",
  authDomain: "disney-clone-yt-new.firebaseapp.com",
  projectId: "disney-clone-yt-new",
  storageBucket: "disney-clone-yt-new.appspot.com",
  messagingSenderId: "587324166196",
  appId: "1:587324166196:web:c52308867b1d34af197a61"
};

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();

export { db };