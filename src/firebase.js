import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_GvMbp5Z5J5TAUGxGVcj-eT1jL641_5Y",
    authDomain: "devsnesthackathon.firebaseapp.com",
    projectId: "devsnesthackathon",
    storageBucket: "devsnesthackathon.appspot.com",
    messagingSenderId: "123126916096",
    appId: "1:123126916096:web:2d1256c2bb6712e465a4e5",
    measurementId: "G-01DWWMFF07"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};