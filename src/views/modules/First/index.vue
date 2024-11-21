<template>
  <div class="module-one">
    <ul>
      <template v-for="(v, i) in modulefirstList" :key="i">
        <li>
          <div class="module-one-title">{{ v.title }}</div>
          <div class="module-one-item">
            <span class="module-one-num">{{ v.num }}</span>
            <span class="module-one-unit">{{ v.unit }}</span>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const modulefirstList = ref([
  { title: "营养里程", num: "3435", unit: "座" },
  { title: "桥梁", num: "1234", unit: "个" },
  { title: "闸道", num: "24", unit: "个" },
  { title: "隧道", num: "2234", unit: "个" },
  { title: "涵洞隧道", num: "234", unit: "个" },
  { title: "服务区", num: "24", unit: "个" },
  { title: "收费站", num: "34", unit: "个" },
  { title: "超限站", num: "14", unit: "个" },
  { title: "停车区", num: "52", unit: "个" },
]);
</script>

<style scoped>
.module-one {
  display: flex;
  height: 100%;
  background-color: rgba(6, 30, 60, 0.5);
}
.module-one ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.module-one ul li {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 2px solid #08395a;
  border-right: 2px solid #08395a;
}

.module-one-title {
  font-size: 20px;
  margin-bottom: 6px;
}

.module-one-num {
  font-size: 30px;
  font-weight: 600;
}
.module-one-unit {
  margin-left: 10px;
}

.module-one ul li:nth-child(3n + 1) .module-one-num {
  color: rgb(75, 75, 233);
}
.module-one ul li:nth-child(3n + 2) .module-one-num {
  color: hsl(0, 91%, 44%);
}
</style>
