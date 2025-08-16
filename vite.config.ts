import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host:true
  },
  resolve: {
    alias: {
      "@bg": path.resolve(__dirname,"./src/assets/preview")
    }
  }
})
