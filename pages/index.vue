<template>
  <section class="container">
    <div>
      <p class="font-serif heading">海亀LIVE</p>
      <nuxt-link class="btn" to="/dashboard">出題する</nuxt-link>
      <nuxt-link class="btn" to="/play/entry">参加する</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ["auth"],
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>