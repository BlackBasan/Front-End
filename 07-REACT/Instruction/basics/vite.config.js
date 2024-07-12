import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // This is the default port for React apps
        // if you want to change the port, you can do so here
        port: 3000,
    },
    hot: true,
});
