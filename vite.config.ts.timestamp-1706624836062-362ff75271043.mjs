// vite.config.ts
import { loadEnv } from "file:///D:/Code/VueProject/magic-store-admin/node_modules/vite/dist/node/index.js";
import path, { resolve } from "path";
import vue from "file:///D:/Code/VueProject/magic-store-admin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Code/VueProject/magic-store-admin/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/Code/VueProject/magic-store-admin/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import svgLoader from "file:///D:/Code/VueProject/magic-store-admin/node_modules/vite-svg-loader/index.js";
import UnoCSS from "file:///D:/Code/VueProject/magic-store-admin/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_dirname = "D:\\Code\\VueProject\\magic-store-admin";
var vite_config_default = (configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd());
  const { VITE_PUBLIC_PATH } = viteEnv;
  return {
    /** 打包时根据实际情况修改 base */
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        /** @ 符号指向 src 目录 */
        "@": resolve(__vite_injected_original_dirname, "./src")
      }
    },
    server: {
      /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
      // host: true, // host: "0.0.0.0"
      host: "0.0.0.0",
      /** 端口号 */
      port: 80,
      /** 是否自动打开浏览器 */
      open: false,
      /** 跨域设置允许 */
      cors: true,
      /** 端口被占用时，是否直接退出 */
      strictPort: false,
      /** 接口代理 */
      proxy: {
        "/api/v1": {
          target: "https://www.fastmock.site/mock/761e2dda2b8890ab86c928a74e8f6538",
          ws: true,
          /** 是否允许跨域 */
          changeOrigin: true
        }
      },
      /** 预热常用文件，提高初始页面加载速度 */
      warmup: {
        clientFiles: ["./src/layouts/**/*.vue"]
      }
    },
    build: {
      /** 单个 chunk 文件的大小超过 2048KB 时发出警告 */
      chunkSizeWarningLimit: 2048,
      /** 禁用 gzip 压缩大小报告 */
      reportCompressedSize: false,
      /** 打包后静态资源目录 */
      assetsDir: "static",
      rollupOptions: {
        output: {
          /**
           * 分块策略
           * 1. 注意这些包名必须存在，否则打包会报错
           * 2. 如果你不想自定义 chunk 分割策略，可以直接移除这段配置
           */
          manualChunks: {
            vue: ["vue", "vue-router", "pinia"],
            element: ["element-plus", "@element-plus/icons-vue"],
            vxe: ["vxe-table", "vxe-table-plugin-element", "xe-utils"]
          }
        }
      }
    },
    /** 混淆器 */
    esbuild: {
      /** 打包时移除 console.log */
      pure: ["console.log"],
      /** 打包时移除 debugger */
      drop: ["debugger"],
      /** 打包时移除所有注释 */
      legalComments: "none"
    },
    /** Vite 插件 */
    plugins: [
      vue(),
      vueJsx(),
      /** 将 SVG 静态图转化为 Vue 组件 */
      svgLoader({ defaultImport: "url" }),
      /** SVG */
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
        symbolId: "icon-[dir]-[name]"
      }),
      /** UnoCSS */
      UnoCSS()
    ],
    /** Vitest 单元测试配置：https://cn.vitest.dev/config */
    test: {
      include: ["tests/**/*.test.ts"],
      environment: "jsdom"
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb2RlXFxcXFZ1ZVByb2plY3RcXFxcbWFnaWMtc3RvcmUtYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlUHJvamVjdFxcXFxtYWdpYy1zdG9yZS1hZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kZS9WdWVQcm9qZWN0L21hZ2ljLXN0b3JlLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5cclxuaW1wb3J0IHsgdHlwZSBDb25maWdFbnYsIHR5cGUgVXNlckNvbmZpZ0V4cG9ydCwgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCJcclxuaW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCJcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiXHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiXHJcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSBcInZpdGUtc3ZnLWxvYWRlclwiXHJcbmltcG9ydCBVbm9DU1MgZnJvbSBcInVub2Nzcy92aXRlXCJcclxuXHJcbi8qKiBcdTkxNERcdTdGNkVcdTk4NzlcdTY1ODdcdTY4NjNcdUZGMUFodHRwczovL2NuLnZpdGVqcy5kZXYvY29uZmlnICovXHJcbmV4cG9ydCBkZWZhdWx0IChjb25maWdFbnY6IENvbmZpZ0Vudik6IFVzZXJDb25maWdFeHBvcnQgPT4ge1xyXG4gIGNvbnN0IHZpdGVFbnYgPSBsb2FkRW52KGNvbmZpZ0Vudi5tb2RlLCBwcm9jZXNzLmN3ZCgpKSBhcyBJbXBvcnRNZXRhRW52XHJcbiAgY29uc3QgeyBWSVRFX1BVQkxJQ19QQVRIIH0gPSB2aXRlRW52XHJcbiAgcmV0dXJuIHtcclxuICAgIC8qKiBcdTYyNTNcdTUzMDVcdTY1RjZcdTY4MzlcdTYzNkVcdTVCOUVcdTk2NDVcdTYwQzVcdTUxQjVcdTRGRUVcdTY1MzkgYmFzZSAqL1xyXG4gICAgYmFzZTogVklURV9QVUJMSUNfUEFUSCxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAvKiogQCBcdTdCMjZcdTUzRjdcdTYzMDdcdTU0MTEgc3JjIFx1NzZFRVx1NUY1NSAqL1xyXG4gICAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIC8qKiBcdThCQkVcdTdGNkUgaG9zdDogdHJ1ZSBcdTYyNERcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1MjggTmV0d29yayBcdTc2ODRcdTVGNjJcdTVGMEZcdUZGMENcdTRFRTUgSVAgXHU4QkJGXHU5NUVFXHU5ODc5XHU3NkVFICovXHJcbiAgICAgIC8vIGhvc3Q6IHRydWUsIC8vIGhvc3Q6IFwiMC4wLjAuMFwiXHJcbiAgICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgICAvKiogXHU3QUVGXHU1M0UzXHU1M0Y3ICovXHJcbiAgICAgIHBvcnQ6IDgwLFxyXG4gICAgICAvKiogXHU2NjJGXHU1NDI2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4ICovXHJcbiAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAvKiogXHU4REU4XHU1N0RGXHU4QkJFXHU3RjZFXHU1MTQxXHU4QkI4ICovXHJcbiAgICAgIGNvcnM6IHRydWUsXHJcbiAgICAgIC8qKiBcdTdBRUZcdTUzRTNcdTg4QUJcdTUzNjBcdTc1MjhcdTY1RjZcdUZGMENcdTY2MkZcdTU0MjZcdTc2RjRcdTYzQTVcdTkwMDBcdTUxRkEgKi9cclxuICAgICAgc3RyaWN0UG9ydDogZmFsc2UsXHJcbiAgICAgIC8qKiBcdTYzQTVcdTUzRTNcdTRFRTNcdTc0MDYgKi9cclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICBcIi9hcGkvdjFcIjoge1xyXG4gICAgICAgICAgdGFyZ2V0OiBcImh0dHBzOi8vd3d3LmZhc3Rtb2NrLnNpdGUvbW9jay83NjFlMmRkYTJiODg5MGFiODZjOTI4YTc0ZThmNjUzOFwiLFxyXG4gICAgICAgICAgd3M6IHRydWUsXHJcbiAgICAgICAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTQxXHU4QkI4XHU4REU4XHU1N0RGICovXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKiBcdTk4ODRcdTcwRURcdTVFMzhcdTc1MjhcdTY1ODdcdTRFRjZcdUZGMENcdTYzRDBcdTlBRDhcdTUyMURcdTU5Q0JcdTk4NzVcdTk3NjJcdTUyQTBcdThGN0RcdTkwMUZcdTVFQTYgKi9cclxuICAgICAgd2FybXVwOiB7XHJcbiAgICAgICAgY2xpZW50RmlsZXM6IFtcIi4vc3JjL2xheW91dHMvKiovKi52dWVcIl1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIC8qKiBcdTUzNTVcdTRFMkEgY2h1bmsgXHU2NTg3XHU0RUY2XHU3Njg0XHU1OTI3XHU1QzBGXHU4RDg1XHU4RkM3IDIwNDhLQiBcdTY1RjZcdTUzRDFcdTUxRkFcdThCNjZcdTU0NEEgKi9cclxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDQ4LFxyXG4gICAgICAvKiogXHU3OTgxXHU3NTI4IGd6aXAgXHU1MzhCXHU3RjI5XHU1OTI3XHU1QzBGXHU2MkE1XHU1NDRBICovXHJcbiAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcclxuICAgICAgLyoqIFx1NjI1M1x1NTMwNVx1NTQwRVx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NzZFRVx1NUY1NSAqL1xyXG4gICAgICBhc3NldHNEaXI6IFwic3RhdGljXCIsXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogXHU1MjA2XHU1NzU3XHU3QjU2XHU3NTY1XHJcbiAgICAgICAgICAgKiAxLiBcdTZDRThcdTYxMEZcdThGRDlcdTRFOUJcdTUzMDVcdTU0MERcdTVGQzVcdTk4N0JcdTVCNThcdTU3MjhcdUZGMENcdTU0MjZcdTUyMTlcdTYyNTNcdTUzMDVcdTRGMUFcdTYyQTVcdTk1MTlcclxuICAgICAgICAgICAqIDIuIFx1NTk4Mlx1Njc5Q1x1NEY2MFx1NEUwRFx1NjBGM1x1ODFFQVx1NUI5QVx1NEU0OSBjaHVuayBcdTUyMDZcdTUyNzJcdTdCNTZcdTc1NjVcdUZGMENcdTUzRUZcdTRFRTVcdTc2RjRcdTYzQTVcdTc5RkJcdTk2NjRcdThGRDlcdTZCQjVcdTkxNERcdTdGNkVcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICAgIHZ1ZTogW1widnVlXCIsIFwidnVlLXJvdXRlclwiLCBcInBpbmlhXCJdLFxyXG4gICAgICAgICAgICBlbGVtZW50OiBbXCJlbGVtZW50LXBsdXNcIiwgXCJAZWxlbWVudC1wbHVzL2ljb25zLXZ1ZVwiXSxcclxuICAgICAgICAgICAgdnhlOiBbXCJ2eGUtdGFibGVcIiwgXCJ2eGUtdGFibGUtcGx1Z2luLWVsZW1lbnRcIiwgXCJ4ZS11dGlsc1wiXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKiBcdTZERjdcdTZEQzZcdTU2NjggKi9cclxuICAgIGVzYnVpbGQ6IHtcclxuICAgICAgLyoqIFx1NjI1M1x1NTMwNVx1NjVGNlx1NzlGQlx1OTY2NCBjb25zb2xlLmxvZyAqL1xyXG4gICAgICBwdXJlOiBbXCJjb25zb2xlLmxvZ1wiXSxcclxuICAgICAgLyoqIFx1NjI1M1x1NTMwNVx1NjVGNlx1NzlGQlx1OTY2NCBkZWJ1Z2dlciAqL1xyXG4gICAgICBkcm9wOiBbXCJkZWJ1Z2dlclwiXSxcclxuICAgICAgLyoqIFx1NjI1M1x1NTMwNVx1NjVGNlx1NzlGQlx1OTY2NFx1NjI0MFx1NjcwOVx1NkNFOFx1OTFDQSAqL1xyXG4gICAgICBsZWdhbENvbW1lbnRzOiBcIm5vbmVcIlxyXG4gICAgfSxcclxuICAgIC8qKiBWaXRlIFx1NjNEMlx1NEVGNiAqL1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoKSxcclxuICAgICAgdnVlSnN4KCksXHJcbiAgICAgIC8qKiBcdTVDMDYgU1ZHIFx1OTc1OVx1NjAwMVx1NTZGRVx1OEY2Q1x1NTMxNlx1NEUzQSBWdWUgXHU3RUM0XHU0RUY2ICovXHJcbiAgICAgIHN2Z0xvYWRlcih7IGRlZmF1bHRJbXBvcnQ6IFwidXJsXCIgfSksXHJcbiAgICAgIC8qKiBTVkcgKi9cclxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2ljb25zL3N2Z1wiKV0sXHJcbiAgICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIlxyXG4gICAgICB9KSxcclxuICAgICAgLyoqIFVub0NTUyAqL1xyXG4gICAgICBVbm9DU1MoKVxyXG4gICAgXSxcclxuICAgIC8qKiBWaXRlc3QgXHU1MzU1XHU1MTQzXHU2RDRCXHU4QkQ1XHU5MTREXHU3RjZFXHVGRjFBaHR0cHM6Ly9jbi52aXRlc3QuZGV2L2NvbmZpZyAqL1xyXG4gICAgdGVzdDoge1xyXG4gICAgICBpbmNsdWRlOiBbXCJ0ZXN0cy8qKi8qLnRlc3QudHNcIl0sXHJcbiAgICAgIGVudmlyb25tZW50OiBcImpzZG9tXCJcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQWdELGVBQWU7QUFDL0QsT0FBTyxRQUFRLGVBQWU7QUFDOUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLGVBQWU7QUFDdEIsT0FBTyxZQUFZO0FBUm5CLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsQ0FBQyxjQUEyQztBQUN6RCxRQUFNLFVBQVUsUUFBUSxVQUFVLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFDckQsUUFBTSxFQUFFLGlCQUFpQixJQUFJO0FBQzdCLFNBQU87QUFBQTtBQUFBLElBRUwsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBO0FBQUEsUUFFTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ2pDO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQSxNQUdOLE1BQU07QUFBQTtBQUFBLE1BRU4sTUFBTTtBQUFBO0FBQUEsTUFFTixNQUFNO0FBQUE7QUFBQSxNQUVOLE1BQU07QUFBQTtBQUFBLE1BRU4sWUFBWTtBQUFBO0FBQUEsTUFFWixPQUFPO0FBQUEsUUFDTCxXQUFXO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixJQUFJO0FBQUE7QUFBQSxVQUVKLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUEsUUFBUTtBQUFBLFFBQ04sYUFBYSxDQUFDLHdCQUF3QjtBQUFBLE1BQ3hDO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBO0FBQUEsTUFFTCx1QkFBdUI7QUFBQTtBQUFBLE1BRXZCLHNCQUFzQjtBQUFBO0FBQUEsTUFFdEIsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1OLGNBQWM7QUFBQSxZQUNaLEtBQUssQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBLFlBQ2xDLFNBQVMsQ0FBQyxnQkFBZ0IseUJBQXlCO0FBQUEsWUFDbkQsS0FBSyxDQUFDLGFBQWEsNEJBQTRCLFVBQVU7QUFBQSxVQUMzRDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxTQUFTO0FBQUE7QUFBQSxNQUVQLE1BQU0sQ0FBQyxhQUFhO0FBQUE7QUFBQSxNQUVwQixNQUFNLENBQUMsVUFBVTtBQUFBO0FBQUEsTUFFakIsZUFBZTtBQUFBLElBQ2pCO0FBQUE7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQTtBQUFBLE1BRVAsVUFBVSxFQUFFLGVBQWUsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUVsQyxxQkFBcUI7QUFBQSxRQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGVBQWUsQ0FBQztBQUFBLFFBQ3ZELFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQTtBQUFBLE1BRUQsT0FBTztBQUFBLElBQ1Q7QUFBQTtBQUFBLElBRUEsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLG9CQUFvQjtBQUFBLE1BQzlCLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
