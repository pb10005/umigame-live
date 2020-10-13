<template>
  <section class="container">
    <div>
      <p class="font-serif heading">海亀LIVE</p>
      <button class="btn" @click="loginWithGoogle">
        Googleアカウントでログイン
      </button>
      <button class="btn" @click="loginAsGuest">ゲストログイン</button>
      <nuxt-link class="btn" to="/dashboard">出題する</nuxt-link>
      <nuxt-link class="btn" to="/play/entry">参加する</nuxt-link>
    </div>
  </section>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  components: {},
  mounted() {},
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
        })
        .catch(function (error) {
          // Handle Errors here.
        });
    },
    loginAsGuest() {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase
            .auth()
            .signInAnonymously()
            .catch((err) => {});
        });
    },
  },
};
</script>

<style scoped>
</style>