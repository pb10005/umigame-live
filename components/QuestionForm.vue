<template>
  <section>
    <div class="input-field">
      <input
        v-model="puzzleId"
        placeholder="質問"
        id="question"
        type="text"
        class="validate"
      />
      <a href="#!" class="secondary-content"
        ><i class="material-icons">send</i></a
      >
    </div>
  </section>
</template>