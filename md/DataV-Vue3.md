# 安装

> https://datav-vue3.netlify.app/Guide/Guide.html

```bash
pnpm install @kjgl77/datav-vue3
```

```js
// main.ts中全局引入
import { createApp } from "vue";
import DataVVue3 from "@kjgl77/datav-vue3";

const app = createApp(App);

app.use(DataVVue3);
app.mount("#app");
```

```vue
<!-- 在.vue文件的script中import部分组件 -->
<script lang="ts" setup>
import { Decoration1, Decoration2 } from "@kjgl77/datav-vue3";
</script>
<template>
  <!-- 引入之后就可以在vue的template中直接使用 -->
  <decoration-1 :color="['pink', 'yellow']" style="width:200px;height:50px;" />
  <decoration-2 :reverse="true" style="width:5px;height:150px;" />
</template>
```
