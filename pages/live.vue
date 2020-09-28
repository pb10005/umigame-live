<template>
  <section class="container">
    <chat-view id="chat-view" />
    <div id="puzzle-view">
      <puzzle-view />
      <answer-form />
    </div>
  </section>
</template>
<script>
import AnswerForm from "@/components/AnswerForm";
import ChatView from "@/components/ChatView";
import PuzzleView from "@/components/PuzzleView";
export default {
  components: {
    AnswerForm,
    ChatView,
    PuzzleView,
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
</style>