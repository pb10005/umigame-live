import firebase from "~/plugins/firebase";
export default function ({ router, redirect }) {
  if (firebase.auth().currentUser !== null) return;
  return redirect("/");
}
