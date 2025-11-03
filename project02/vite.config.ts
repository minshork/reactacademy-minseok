import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: process.env.VITE_BASE ?? '/', // 기본값이 /
  base : '' // base에다가 레포지지토리 경로를 입력 '/minseok-react/' 이런식으로
})
