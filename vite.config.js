import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_YOUTUBE_API_KEY: 'c8af751e28mshfa0b26ae9c60bbfp12afb9jsn4a9da31b566d'
    },
  },
});
