import process from 'node:process'; // <-- явный импорт
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: env.NODE_ENV === 'production' ? '/art-gallery/' : '/',
  };
});
