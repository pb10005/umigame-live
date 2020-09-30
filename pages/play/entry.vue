<template>
  <section>
    <div class="card">
      <div class="card-content">
        <span class="card-title">参加する</span>
        <div class="input-field">
          <input
            v-model="puzzleId"
            placeholder="問題ID"
            id="puzzle-id"
            type="text"
            class="validate"
          />
          <label for="puzzle-id">問題ID</label>
        </div>
      </div>
      <div class="card-action">
        <a href="#" @click.prevent="cancel">キャンセル</a>
        <a href="#" @click.prevent="join">参加する</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      puzzleId: "",
    };
  },
  methods: {
    cancel() {
      this.$router.push("/");
    },
    join() {
      this.$router.push("/live?puzzle=" + this.puzzleId);
    },
  },
};
</script>