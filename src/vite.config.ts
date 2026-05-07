import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        entry: "electron/main.ts",
        vite: {
          build: {
            outDir: "dist",
          },
        },
      },
      {
        entry: "electron/preload.ts",
        onstart(options) {
          options.reload();
        },
        vite: {
          build: {
            outDir: "dist",
          },
        },
      },
      {
        entry: "electron/renderer.ts",
        vite: {
          build: {
            outDir: "dist",
          },
        },
      },
      {
        vite: {
          build: {
            outDir: "dist",
          },
        },
      },
    ]),
    renderer(),
  ],
});
