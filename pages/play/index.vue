<template>
  <section class="container">
    <ul id="chat-view" class="collection with-header">
      <li class="collection-header">
        <div class="switch">
          <label>
            すべて
            <input type="checkbox" v-model="filtered" />
            <span class="lever"></span>
            未回答
          </label>
        </div>
      </li>
      <chat-view :filter="filtered ? 'new' : 'none'" :questions="questions" />
    </ul>

    <div id="puzzle-view">
      <a class="align-left" href="#" @click="$router.push('/dashboard')"
        ><i class="material-icons">arrow_back</i></a
      >
      <puzzle-view :puzzle="puzzle" :status="status" />
      <question-form id="question-form" @submit="submit" />
    </div>
  </section>
</template>
<script>
import ChatView from "@/components/ChatView";
import PuzzleView from "@/components/PuzzleView";
import QuestionForm from "@/components/QuestionForm";
import firebase from "~/plugins/firebase";
const db = firebase.firestore();

export default {
  middleware: ["auth"],
  components: {
    ChatView,
    PuzzleView,
    QuestionForm,
  },
  computed: {
    puzzleId() {
      return this.$route.query.puzzle;
    },
  },
  data() {
    return {
      currentQuestion: "",
      speech: null,
      synth: null,
      puzzle: {
        title: "",
        puzzle: "",
        answer: "",
        reference: "",
      },
      status: "",
      questions: [],
      unsubscribe: [],
      filtered: false,
    };
  },
  mounted() {
    db.collection("puzzles")
      .doc(this.puzzleId)
      .get()
      .then((doc) => {
        this.puzzle = doc.data();
      });

    this.unsubscribe.push(
      db
        .collection("puzzles")
        .doc(this.puzzleId)
        .onSnapshot((doc) => {
          this.status = doc.data().status;
        })
    );
    this.unsubscribe.push(
      db
        .collection("puzzles")
        .doc(this.puzzleId)
        .collection("questions")
        .orderBy("timestamp")
        .onSnapshot((docs) => {
          this.questions = [];
          docs.forEach((doc) => {
            let data = {
              id: doc.id,
              content: doc.data().content,
              answer: doc.data().answer,
            };
            this.questions.push(data);
          });
        })
    );
  },
  destroyed() {
    for (const key in this.unsubscribe) {
      this.unsubscribe[key]();
    }
  },
  methods: {
    submit(question) {
      if (!question) return;
      db.collection("puzzles").doc(this.puzzleId).collection("questions").add({
        content: question,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    },
  },
};
</script>
<style scoped>
#chat-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  bottom: 0;
  overflow-y: auto;
}
#puzzle-view {
  position: fixed;
  top: 0;
  left: 30%;
  width: 70%;
  height: 100vh;
  text-align: left;
  overflow-y: auto;
}
#question-form {
  padding-top: 10px;
  left: 30%;
  right: 0;
  width: 100%;
}

#question-button {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>