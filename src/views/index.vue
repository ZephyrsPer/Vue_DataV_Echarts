<template>
  <div>
    <Title></Title>
    <!-- 通过网格布局 -->
    <div class="main">
      <First></First>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
    </div>
  </div>
</template>

<script setup>
import Title from "./modules/Title/index.vue";
import First from "./modules/First/index.vue";
import Second from "./modules/Second/index.vue";
import Third from "./modules/Third/index.vue";
import Fourth from "./modules/Fourth/index.vue";
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 3fr 2fr;
  width: 100%;
  height: 100%;
}
.main div:nth-child(1) {
  grid-column: 1/3;
}
.main div:nth-child(2) {
  grid-column: 2/4;
}
</style>
