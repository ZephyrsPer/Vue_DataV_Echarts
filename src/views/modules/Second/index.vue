<template>
  <div>
    <barchart></barchart>
    <scrollboard></scrollboard>
  </div>
</template>

<script setup>
import barchart from "@/views/charts/barchart.vue";
import scrollboard from "@/views/charts/scrollboard.vue";
</script>

<style scoped>
div {
  height: 100%;
  background-color: #0d2049;
  border-top: 2px solid #0b3e6b;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
