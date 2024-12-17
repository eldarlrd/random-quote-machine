import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config
export default defineConfig({
  base: '/random-quote-machine/',
  plugins: [react()],
  resolve: { alias: { '@': '/src' } }
});