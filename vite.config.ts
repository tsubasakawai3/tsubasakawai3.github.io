import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/my-react-app/",
  plugins: [react()],
  // for forwarding container ports
  server: {
    host: '0.0.0.0'
  }
})
