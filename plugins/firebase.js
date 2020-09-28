import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBWySmfR6KhhiAnl-sExUqjCH61cyZlY8M",
    authDomain: "umigame-live.firebaseapp.com",
    databaseURL: "https://umigame-live.firebaseio.com",
    projectId: "umigame-live",
    storageBucket: "umigame-live.appspot.com",
    messagingSenderId: "743734992703",
    appId: "1:743734992703:web:4a07b681939e8807087d8a",
    measurementId: "G-G9F8YL33DV"
  });
}

export default firebase;
