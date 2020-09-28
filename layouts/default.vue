<template>
  <div class="">
    <Nuxt />
    <footer class="page-footer">
      <div class="footer-copyright">
        <div class="">© 2020 Copyright 人参</div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: "Kosugi Maru", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2E495E;
  background: url("~assets/tile.jpg");
  background-size: auto;
}

.font-serif {
  font-family: "Sawarabi Mincho", serif;
}

.heading {
  font-size: 3rem;
}
.content-text {
  font-size: 2rem;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #00C48D;
  color: #00C48D;
  text-decoration: none;
  padding: 10px 30px;
  display: inline-flex;
  align-self: center;
}

.button--green:hover {
  color: #fff;
  background-color: #00C48D;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #2E495E;
  color: #2E495E;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #2E495E;
}
</style>
