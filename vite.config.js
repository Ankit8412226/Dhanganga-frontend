import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  preview: {
    host: true, // bind to 0.0.0.0 so Railway can access it
    port:  5173, // use Railway's PORT env
    allowedHosts: [
      'localhost',
      'dhanganga-production-adfb.up.railway.app' // Railway domain
    ]
  }
});
