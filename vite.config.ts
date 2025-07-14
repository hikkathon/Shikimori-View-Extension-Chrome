import path from 'node:path'
import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import zip from 'vite-plugin-zip-pack'
import manifest from './manifest.config.js'
import { name, version } from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
  },
  plugins: [
    react(),
    crx({ manifest }),
    zip({ outDir: 'release', outFileName: `crx-${name}-${version}.zip` }),
  ],
  server: {
    cors: {
      origin: [
        /chrome-extension:\/\//,
      ],
    },
    headers: {
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://kodik.cc;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data:;
        connect-src 'self';
        font-src 'self';
        object-src 'none';
        frame-src https://kodik.cc;
        worker-src 'self' blob:;
      `.replace(/\s{2,}/g, ' ').trim()
    }
  },
  preview: {
    headers: {
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://kodik.cc;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data:;
        connect-src 'self';
        font-src 'self';
        object-src 'none';
        frame-src https://kodik.cc;
        worker-src 'self' blob:;
      `.replace(/\s{2,}/g, ' ').trim()
    }
  }
})
