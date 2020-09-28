<template>
  <section>
    <ul class="collection with-header">
      <li class="collection-header font-serif"><span>質問リスト</span></li>
      <li
        class="collection-item"
        v-for="item in ['test1', 'test2']"
        :key="item"
      >
        <div>
          {{ item
          }}<a href="#!" class="secondary-content"
            ><i class="material-icons">send</i></a
          >
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
</style>
