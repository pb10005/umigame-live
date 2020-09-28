<template>
  <section class="container">
    <chat-view
      :questions="questions"
      id="chat-view"
      @question-selected="onQuestionSelected"
    />
    <div id="puzzle-view">
      <puzzle-view :puzzle="puzzle" />
      <answer-form :question="currentQuestion" v-if="currentQuestion" />
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
  components: {
    AnswerForm,
    ChatView,
    PuzzleView,
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
      questions: [],
    };
  },
  mounted() {
    db.collection("puzzles")
      .doc("coruhOL4bqrgnpq3nDvg")
      .get()
      .then((doc) => {
        this.puzzle = doc.data();
      });

    db.collection("puzzles")
      .doc("coruhOL4bqrgnpq3nDvg")
      .collection("questions")
      .onSnapshot((docs) => {
        this.questions = [];
        docs.forEach((doc) => {
          this.questions.push(doc.data());
        });
      });
  },
  methods: {
    onQuestionSelected(item) {
      this.speech = new SpeechSynthesisUtterance();
      this.speech.lang = "ja";
      this.speech.text = item;
      window.speechSynthesis.speak(this.speech);
      this.currentQuestion = item;
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
}
#puzzle-view {
  position: fixed;
  top: 0;
  left: 30%;
  width: 70%;
  height: 100%;
  padding: 5px;
}
</style>