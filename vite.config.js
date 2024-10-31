import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 实现路径别名
import { resolve } from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,//自动浏览
    port: 8088,
  },
  resolve: {
    alias: [
      {
        find: '@', //相当于简写路径
        replacement: resolve(__dirname, 'src') //绝对路径
      }
    ]
  }
})
