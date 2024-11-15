<template>
  <div class="module-one">
    <ul>
      <li>
        <div>桥梁</div>
        <div>
          <span>3434</span>
          <span>座</span>
        </div>
      </li>
      <li>
        <div>桥梁</div>
        <div>
          <span>3434</span>
          <span>ge1</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const modulefirstList = ref([
  { title: "营养里程", num: "3435", unit: "座" },
  { title: "桥梁", num: "234", unit: "个" },
  { title: "闸道", num: "234", unit: "个" },
  { title: "桥梁", num: "234", unit: "个" },
  { title: "闸道", num: "234", unit: "个" },
  { title: "桥梁", num: "234", unit: "个" },
  { title: "闸道", num: "234", unit: "个" },
  { title: "桥梁", num: "234", unit: "个" },
  { title: "闸道", num: "234", unit: "个" },
  { title: "桥梁", num: "234", unit: "个" },
  { title: "闸道", num: "234", unit: "个" },
]);
</script>

<style scoped>
.module-one {
  display: flex;
}
.module-one ul {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #a05959;
}
</style>
