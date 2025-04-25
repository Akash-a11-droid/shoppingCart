import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/", // or your repo name if deploying to GitHub Pages
  plugins: [react()],
})
