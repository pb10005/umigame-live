<template>
  <section>
    <div class="card grey lighten-4" id="puzzle">
      <div class="card-content">
        <div v-if="!puzzle.title" class="progress">
          <div class="indeterminate"></div>
        </div>
        <span class="card-title font-serif">{{ puzzle.title }}</span>
        <span class="content-text teal-text lighten-2">{{
          puzzle.puzzle
        }}</span>
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
