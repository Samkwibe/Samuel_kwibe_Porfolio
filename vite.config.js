import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.VERCEL ? '/' : '/Samuel_kwibe_Porfolio/'

export default defineConfig({
  plugins: [react()],
  base
})
