import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBDzdTgCxfXo0ctldOgG73ViQDEgo1MjmY",
    authDomain: "facebook-clone-dfa38.firebaseapp.com",
    databaseURL: "https://facebook-clone-dfa38.firebaseio.com",
    projectId: "facebook-clone-dfa38",
    storageBucket: "facebook-clone-dfa38.appspot.com",
    messagingSenderId: "701281566037",
    appId: "1:701281566037:web:f61ff364dad9e6bfb003dc",
    measurementId: "G-PNRN0VGD09"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider  = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;