import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",     // IPv6 + IPv4
    port: 8080,     // dev server port
    proxy: {
      "/api": {
        target: "http://localhost:5174", // Express API
        changeOrigin: true,
        // rewrite: (p) => p, // keep path as-is (uncomment if you need custom rewrites)
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
