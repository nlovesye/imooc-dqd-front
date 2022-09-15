import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  plugins: [vue()],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
        additionalData: '@import "./src/assets/scss/var.scss";',
      },
    },
  },
  define: {
    "process.env": {
      NODE_ENV: process.env?.NODE_ENV || "unknown",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3700,
    host: "0.0.0.0",
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:7500", //代理接口
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //     changeOrigin: true,
    //   },
    // },
  },
});
