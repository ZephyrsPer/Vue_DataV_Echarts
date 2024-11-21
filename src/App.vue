<script setup></script>

<template>
  <div id="bg">
    <router-view></router-view>
  </div>
</template>

<style scoped>
#bg {
  min-height: 100%;
  width: 100%;
  /* background: url("./assets/img/bg.jpg") no-repeat center; */
  background-color: rgba(8, 6, 0, 0.938);
  background-size: cover;
  color: aliceblue;
}
</style>
