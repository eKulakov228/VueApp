<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  margin-top: 60px;
}
html{
  height: 100%;
}
body{
  background-image: url("assets/img/background-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
  ul{
  list-style-type: none;
  }
</style>
