<template>
  <div style="height: 100%">
    <Title></Title>
    <!-- 通过网格布局 -->
    <div class="main">
      <First class="top"></First>
      <div class="bottom">
        <Second class="bottom-left"></Second>
        <div class="bottom-right">
          <Third class="bottom-right-top"></Third>
          <Fourth class="bottom-right-bottom"></Fourth>
        </div>
      </div>
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
:deep(.header) {
  /* background-color: #fafafa; */
  color: rgb(248, 183, 97);
  max-height: 20%;
  height: 10%;
}
.main {
  max-height: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
}

.main .top {
  flex: 1;
}

.main .bottom {
  flex: 9;
  display: flex;
  width: 100%;
}

.main .bottom .bottom-left {
  height: 100%;
  flex: 3;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
}
.main .bottom .bottom-right {
  flex: 7;
  display: flex;
  flex-direction: column;
}
</style>
