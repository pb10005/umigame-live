<template>
  <section>
    <div class="card">
      <div class="card-content">
        <span class="card-title font-serif">問題を確認</span>
        <p>タイトル：{{ puzzle.title }}</p>
        <p class="multiline">問題文：{{ puzzle.puzzle }}</p>
        <p class="multiline">解説：{{ puzzle.answer }}</p>
        <p>引用元：{{ puzzle.reference }}</p>
      </div>
      <div class="card-action">
        <a href="#" @click.prevent="cancel">キャンセル</a>
        <a href="#" @click.prevent="create">登録</a>
      </div>
    </div>
  </section>
</template>
<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();
export default {
  middleware: ["auth"],
  computed: {
    puzzle() {
      return this.$store.getters["create/puzzle"];
    },
  },
  methods: {
    create() {
      this.puzzle.author = firebase.auth().currentUser.uid;
      db.collection("puzzles")
        .add(this.puzzle)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(() => {
          this.$router.push("/create");
        });
    },
    cancel() {
      this.$router.push("/create");
    },
  },
};
</script>
