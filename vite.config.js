import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Domínio próprio (flvbadvocacia.com.br) => base '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
