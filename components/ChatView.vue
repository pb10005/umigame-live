<template>
  <section>
    <a
      href="#"
      @click="onClick(item)"
      class="collection-item"
      v-for="item in filteredQuestions()"
      :key="item.id"
    >
      <span>
        {{ item.content }}
      </span>
      <span
        v-if="item.answer"
        class="new badge"
        :class="color[item.answer]"
        data-badge-caption=""
        >{{ answerText[item.answer] }}</span
      >
    </a>
  </section>
</template>
<script>
export default {
  props: {
    filter: String,
    questions: Array,
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
  methods: {
    onClick(item) {
      this.$emit("question-selected", item);
    },
    filteredQuestions() {
      if (this.filter === "new") {
        return this.questions.filter((q) => !q.answer);
      } else {
        return this.questions;
      }
    },
  },
};
</script>
<style scoped>
</style>
