import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/pascua-portfolio/',
  plugins: [
    tailwindcss(),
  ],
})

