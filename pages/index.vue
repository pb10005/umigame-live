<template>
  <section class="container">
    <div>
      <p class="font-serif heading">海亀LIVE</p>
      <button class="btn" @click="loginWithGoogle">
        Googleアカウントでログイン
      </button>
      <button class="btn" @click="loginAsGuest">ゲストログイン</button>
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
        .then(() => {
          if (this.$route.query.redirect) {
            this.$router.push(this.$route.query.redirect);
          } else {
            this.$router.push("/dashboard");
          }
        })
        .catch(function (error) {});
    },
    loginAsGuest() {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase
            .auth()
            .signInAnonymously()
            .then(() => {
              if (this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect);
              } else {
                this.$router.push("/dashboard");
              }
            })
            .catch((err) => {});
        });
    },
  },
};
</script>

<style scoped>
</style>