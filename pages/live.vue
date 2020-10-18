<template>
  <section class="container">
    <ul id="chat-view" class="collection with-header">
      <li class="collection-header">
        <div class="switch">
          <label>
            すべて
            <input type="checkbox" />
            <span class="lever"></span>
            未回答
          </label>
        </div>
      </li>
      <chat-view
        :questions="questions"
        @question-selected="onQuestionSelected"
      />
    </ul>
    <div id="puzzle-view">
      <a class="align-left" href="#" @click="$router.push('/dashboard')"
        ><i class="material-icons">arrow_back</i></a
      >
      <a href="#" @click="openModal">解説を出す</a>
      <puzzle-view :puzzle="puzzle" :status="status" />
      <answer-form
        :puzzleId="puzzleId"
        :question="currentQuestion"
        v-if="currentQuestion.id"
      />
    </div>
    <div id="modal" class="modal">
      <div class="modal-content">
        <span>解説を出してよろしいですか？</span>
      </div>
      <div class="modal-footer">
        <button class="btn" @click="showSolution">Yes</button>
        <button class="btn" @click="modal.close()">No</button>
      </div>
    </div>
  </section>
</template>
<script>
import AnswerForm from "@/components/AnswerForm";
import ChatView from "@/components/ChatView";
import PuzzleView from "@/components/PuzzleView";
import firebase from "~/plugins/firebase";
const db = firebase.firestore();
export default {
  middleware: ["auth"],
  components: {
    AnswerForm,
    ChatView,
    PuzzleView,
  },
  computed: {
    puzzleId() {
      return this.$route.query.puzzle;
    },
  },
  data() {
    return {
      currentQuestion: {
        id: "",
        content: "",
      },
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
      modal: null,
    };
  },
  mounted() {
    const elems = document.querySelectorAll(".modal");
    this.modal = window.M.Modal.init(elems)[0];
    db.collection("puzzles")
      .doc(this.puzzleId)
      .get()
      .then((doc) => {
        this.puzzle = doc.data();
        if (this.puzzle.author !== firebase.auth().currentUser.uid) {
          this.$router.push("/play?puzzle=" + this.puzzleId);
        }
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
    onQuestionSelected(item) {
      this.speech = new SpeechSynthesisUtterance();
      this.speech.lang = "ja";
      this.speech.text = item.content;
      window.speechSynthesis.speak(this.speech);
      this.currentQuestion = item;
    },
    showSolution() {
      db.collection("puzzles").doc(this.puzzleId).update({
        status: "solution",
      });
      this.modal.close();
    },
    openModal() {
      this.modal.open();
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
  height: 100%;
  overflow-y: auto;
}
#puzzle-view {
  position: fixed;
  top: 0;
  left: 30%;
  width: 70%;
  height: 100%;
  padding: 5px;
  text-align: left;
}
</style>