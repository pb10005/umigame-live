<template>
  <section class="card" id="answer">
    <div class="card-content">
      <div class="content-text">{{ question }}</div>
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
export default {
  props: {
    question: String,
  },
  mounted() {
    this.speech = new SpeechSynthesisUtterance();
    this.speech.lang = "ja";
    this.synth = window.speechSynthesis;
  },
  methods: {
    trueAns() {
      this.speech.text = "正解です";
      this.synth.speak(this.speech);
    },
    yes() {
      this.speech.text = "Yes";
      this.synth.speak(this.speech);
    },
    no() {
      this.speech.text = "No";
      this.synth.speak(this.speech);
    },
    yesno() {
      this.speech.text = "Yes No";
      this.synth.speak(this.speech);
    },
  },
};
</script>
<style scoped>
#answer {
  margin: 2em 1em;
  box-shadow: 0.5em -0.5em gray, -0.5em 0.5em gray, 0.5em 0.5em indianred,
    -0.5em -0.5em indianred;
}
</style>
