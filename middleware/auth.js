import firebase from "~/plugins/firebase";
export default function ({ redirect }) {
  if (firebase.auth().currentUser !== null) return;
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return firebase
        .auth()
        .signInAnonymously()
        .catch((err) => {});
    });
}
