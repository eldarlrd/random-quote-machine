import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config
export default defineConfig({
  base: '/random-quote-machine/',
  plugins: [react(), tsconfigPaths()],
  resolve: { alias: { '@': '/src', '%': '/src/config' } },
});