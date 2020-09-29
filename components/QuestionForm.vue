<template>
  <section>
    <div id="form" class="card">
      <div class="card-content">
        <form @submit.prevent="submit">
          <div class="input-field">
            <input
              v-model="question"
              placeholder="質問"
              id="question"
              type="text"
              class="validate"
            />
            <label for="question">質問</label>
            <a href="#!" class="secondary-content"
              ><i class="material-icons">send</i></a
            >
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      question: "",
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.question);
      this.question = "";
    },
  },
};
</script>
<style scoped>
#form {
  margin: 1em;
  box-shadow: 0.5em -0.5em gray, -0.5em 0.5em gray, 0.5em 0.5em indianred,
    -0.5em -0.5em indianred;
}
</style>
