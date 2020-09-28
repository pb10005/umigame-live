<template>
  <section class="container">
    <chat-view id="chat-view" />
    <question-form id="question-form" />
    <puzzle-view id="puzzle-view" />
  </section>
</template>
<script>
import ChatView from "@/components/ChatView";
import PuzzleView from "@/components/PuzzleView";
import QuestionForm from "@/components/QuestionForm";

export default {
  components: {
    ChatView,
    PuzzleView,
    QuestionForm,
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
}
#question-form {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 30%;
}
</style>