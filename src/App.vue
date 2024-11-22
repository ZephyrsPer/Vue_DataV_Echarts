<script setup></script>

<template>
  <div id="bg">
    <router-view></router-view>
  </div>
</template>

<style scoped>
#bg {
  /* background: url("./assets/img/bg.jpg") no-repeat center; */
  background-color: rgba(8, 6, 0, 0.938);
  background-size: cover;
  color: aliceblue;
  height: 100%;
  /* overflow: hidden; */
}
</style>
