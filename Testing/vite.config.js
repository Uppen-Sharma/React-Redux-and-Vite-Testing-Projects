import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Simulates a browser
    setupFiles: "./src/setupTests.js",
    css: true, // Enables CSS parsing (optional, but good for class checks)
  },
});
