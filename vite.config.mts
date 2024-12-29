import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config
export default defineConfig({
  base: '/random-quote-machine/',
  resolve: { alias: { '@': '/src', '%': '/src/config' } },
  plugins: [
    react(), tsconfigPaths(),
    VitePWA({
      srcDir: 'src',
      filename: 'sw.ts',
      manifest: false,
      injectRegister: null,
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      injectManifest: {
        globPatterns: ['**/*.{html,css,js,png,woff2,webmanifest}']
      }
    })
  ]
});