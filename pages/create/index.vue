<template>
  <section>
    <div class="card">
      <div class="card-content">
        <span class="card-title font-serif">問題を登録</span>
        <div class="input-field">
          <input
            v-model="puzzle.title"
            placeholder="タイトル"
            id="title"
            type="text"
            class="validate"
            data-length="100"
          />
          <label for="title">タイトル</label>
        </div>

        <div class="input-field">
          <textarea
            v-model="puzzle.puzzle"
            id="puzzle"
            class="materialize-textarea"
            data-length="300"
          ></textarea>
          <label for="puzzle">問題文</label>
        </div>

        <div class="input-field">
          <textarea
            v-model="puzzle.answer"
            id="answer"
            class="materialize-textarea"
            data-length="300"
          ></textarea>
          <label for="answer">解説</label>
        </div>
        <div class="input-field">
          <input
            v-model="puzzle.reference"
            placeholder="引用元"
            id="ref"
            type="text"
            class="validate"
            data-length="100"
          />
          <label for="ref">引用元URL(あれば)</label>
          <span class="helper-text"
            >既出の問題の場合は出典を明記しましょう</span
          >
        </div>
      </div>
      <div class="card-action">
        <a href="#" @click.prevent="cancel">キャンセル</a>
        <a href="#" @click.prevent="create">確認画面へ</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  middleware: ["auth"],
  data() {
    return {
      puzzle: {
        title: "",
        puzzle: "",
        answer: "",
        reference: "",
      },
    };
  },
  methods: {
    create() {
      this.$store.commit("create/setPuzzle", this.puzzle);
      this.$router.push("/create/confirm");
    },
    cancel() {
      this.$router.push("/");
    },
  },
};
</script>
