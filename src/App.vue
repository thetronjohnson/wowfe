<template>
  <div id="app">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:white;
}

.main {
  padding-top: 2vh;
}

.title {
  background-color:hsl(217, 71%, 53%);
  color: white !important;
  margin-left: 25%;
  margin-right: 25%;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

@media screen and (max-width: 1000px) {
  .main {
    padding: 20px 2%
  }
}
@media screen and (min-width: 1000px) {
  .main.container {
    max-width: 1000px
  }
}
</style>
