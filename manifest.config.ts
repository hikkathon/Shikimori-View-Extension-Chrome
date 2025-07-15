import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  icons: {
    48: 'public/logo.png',
  },
  action: {
    default_icon: {
      48: 'public/logo.png',
    },
    default_popup: 'src/popup/index.html',
  },
  content_scripts: [{
    js: ['src/content/main.tsx'],
    matches: ['https://shikimori.one/*',"https://kodikapi.com/*"],
  }],
  permissions:[
    "tabs",
    "webRequest",
    "webNavigation",
  ],
  host_permissions: [
    "https://kodikapi.com/*",
    "https://shikimori.one/*"
  ],
  background:{
    service_worker: "src/backgrounds/index.js",
  }
})