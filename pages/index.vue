<template>
  <section class="container">
    <div>
      <p class="font-serif heading">海亀LIVE</p>
      <nuxt-link class="btn" to="/create">出題する</nuxt-link>
      <nuxt-link class="btn" to="/play/entry">参加する</nuxt-link>
    </div>
  </section>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  components: {},
  mounted() {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return firebase
          .auth()
          .signInAnonymously()
          .catch((err) => {
            alert(1);
          });
      });
  },
  methods: {},
};
</script>

<style scoped>
</style>