<template>
  <section class="card grey lighten-4" id="answer">
    <div class="card-content">
      <div class="content-text teal-text lighten-2">
        <span
          v-if="question.answer"
          class="new badge"
          :class="color[question.answer]"
          data-badge-caption=""
          >{{ answerText[question.answer] }}</span
        >
        {{ question.content }}
      </div>
    </div>
    <div class="card-action">
      <a class="waves-effect waves-light btn-large" @click="trueAns">正解</a>
      <a class="waves-effect waves-light btn-large blue" @click="yes">YES</a>
      <a class="waves-effect waves-light btn-large pink" @click="no">NO</a>
      <a class="waves-effect waves-light btn-large grey" @click="yesno"
        >YESNO</a
      >
    </div>
  </section>
</template>
<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();
export default {
  props: {
    puzzleId: String,
    question: {
      id: String,
      content: String,
    },
  },
  computed: {
    color(answer) {
      return {
        true_ans: "",
        yes: "blue",
        no: "pink",
        yesno: "grey",
      };
    },
    answerText(answer) {
      return {
        true_ans: "正解",
        yes: "Yes",
        no: "No",
        yesno: "YesNo",
      };
    },
  },
  mounted() {
    this.speech = new SpeechSynthesisUtterance();
    this.speech.lang = "ja";
    this.synth = window.speechSynthesis;
  },
  methods: {
    trueAns() {
      this.speech.text = "正解です";
      this.answer("true_ans");
      this.synth.speak(this.speech);
    },
    yes() {
      this.speech.text = "イエス";
      this.answer("yes");
      this.synth.speak(this.speech);
    },
    no() {
      this.speech.text = "ノー";
      this.answer("no");
      this.synth.speak(this.speech);
    },
    yesno() {
      this.speech.text = "イエスノー";
      this.answer("yesno");
      this.synth.speak(this.speech);
    },
    answer(answer) {
      db.collection("puzzles")
        .doc(this.puzzleId)
        .collection("questions")
        .doc(this.question.id)
        .update({
          answer: answer,
        });
    },
  },
};
</script>
<style scoped>
.card {
  justify-content: center;
  text-align: center;
}
#answer {
  margin: 2em 1em;
  box-shadow: 0.5em -0.5em gray, -0.5em 0.5em gray, 0.5em 0.5em indianred,
    -0.5em -0.5em indianred;
}
</style>
