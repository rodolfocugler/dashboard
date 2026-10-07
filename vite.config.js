import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json' with { type: 'json' };

const src = fileURLToPath(new URL('./src', import.meta.url));

// keep the absolute imports (`ui-component/...`, `store/...`) that CRA's baseUrl allowed
const alias = readdirSync(src)
  .map((name) => name.replace(/\.jsx?$/, ''))
  .map((name) => ({ find: new RegExp(`^${name}(?=/|$)`), replacement: `${src}/${name}` }));

export default defineConfig({
  base: '/dashboard/',
  plugins: [react()],
  resolve: { alias },
  define: { __APP_VERSION__: JSON.stringify(pkg.version) },
  server: { port: 3000 },
  build: { outDir: 'build' }
});
