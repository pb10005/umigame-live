<template>
  <section>
    <div class="card grey lighten-4" id="puzzle">
      <div class="card-content">
        <div v-if="!puzzle.title" class="progress">
          <div class="indeterminate"></div>
        </div>
        <span class="card-title font-serif">{{ puzzle.title }}</span>
        <span
          v-if="status === 'solution'"
          class="content-text teal-text lighten-2 multiline"
          >{{ puzzle.answer }}</span
        >
        <span v-else class="content-text teal-text lighten-2 multiline">{{
          puzzle.puzzle
        }}</span>
        <div class="card-actions">出典：{{ puzzle.reference }}</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    puzzle: {
      title: String,
      puzzle: String,
      reference: String,
    },
    status: String,
  },
  components: {},
};
</script>
<style scoped>
#puzzle {
  background-size: 100% 100%;
  min-height: 300px;
  margin: 1em;
  box-shadow: 0.5em -0.5em gray, -0.5em 0.5em gray, 0.5em 0.5em indianred,
    -0.5em -0.5em indianred;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
