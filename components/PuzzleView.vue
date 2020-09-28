<template>
  <section>
    <div class="card" id="puzzle">
      <div class="card-content">
        <span class="card-title font-serif">問題</span>
        <span class="content-text">ああああ<br />なぜ？</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>
#puzzle {
  background: url("~assets/frame.jpg");
  background-size: 100% 100%;
  min-height: 300px;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
