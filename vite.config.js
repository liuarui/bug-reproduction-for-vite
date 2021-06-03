import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { resolve } from "path";
import FixElementViteBug from "esbuild-plugin-vite-element-ui";
export default ({ mode }) => {
  return defineConfig({
    plugins: [createVuePlugin()],
    server: {
      open: true,
    },
    css: {
      preprocessorOptions: {},
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [FixElementViteBug()],
      },
    },
    resolve: {
      extensions: [".js", ".ts", ".vue"], // Necessary suffix
      alias: [
        {
          find: "@",
          replacement: resolve(resolve(__dirname), "src"),
        },
      ],
    },
  });
};
