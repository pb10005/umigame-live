<template>
  <section>
    <ul class="collection with-header">
      <li class="collection-header font-serif"><span>質問リスト</span></li>
      <li class="collection-item">
        <div class="switch">
          <label>
            すべて
            <input type="checkbox" />
            <span class="lever"></span>
            未回答
          </label>
        </div>
      </li>
      <a
        href="#"
        @click="onClick(item.content)"
        class="collection-item"
        v-for="item in questions"
        :key="item.content"
      >
        <span>
          {{ item.content }}
        </span>
        <span class="new blue badge" data-badge-caption="">YES</span>
      </a>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    questions: Array,
  },
  methods: {
    onClick(item) {
      this.$emit("question-selected", item);
    },
  },
};
</script>
<style scoped>
</style>
