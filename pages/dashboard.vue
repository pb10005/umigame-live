<template>
  <section>
    <a href="#" @click="$router.push('/')"
      ><i class="material-icons">arrow_back</i></a
    >
    <div class="card">
      <div class="card-content">
        <nuxt-link to="/create">問題を登録</nuxt-link>
        <nuxt-link to="/play/entry">問題に参加</nuxt-link>
        <ul class="collection with-header">
          <li class="collection-header font-serif">あなたが出題した問題</li>
          <li class="collection-item" v-for="item in puzzles" :key="item.id">
            <nuxt-link :to="`/live?puzzle=${item.id}`">{{
              item.title
            }}</nuxt-link>
            <span>{{ origin }}/play?puzzle={{ item.id }}</span>
          </li>
        </ul>
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
    origin() {
      return window.location.origin;
    },
  },
  data() {
    return {
      puzzles: [],
    };
  },
  mounted() {
    db.collection("puzzles")
      .where("author", "==", firebase.auth().currentUser.uid)
      .get()
      .then((docs) => {
        this.puzzles = [];
        docs.forEach((doc) => {
          let data = doc.data();
          data.id = doc.id;
          this.puzzles.push(data);
        });
      });
  },
};
</script>
