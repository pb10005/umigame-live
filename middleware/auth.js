import firebase from "~/plugins/firebase";
export default function ({ route, redirect }) {
  if (firebase.auth().currentUser === null) {
    return redirect("/");
  }
}
