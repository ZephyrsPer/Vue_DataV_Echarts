<template>
  <div class="header">
    <dv-decoration8 style="width: 400px; height: 50px" />
    <div class="header-title">
      <h2 style="margin-top: 3px">智能养护工程监管平台</h2>
      <dv-decoration5 :dur="2" style="width: 500px; height: 40px" />
    </div>
    <dv-decoration8 :reverse="true" style="width: 400px; height: 50px" />
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 12px;
}
.header-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
