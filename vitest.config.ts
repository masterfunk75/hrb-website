import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// Tests unitaires (logique pure : parité i18n, getters de contenu, utilitaires).
// Pas de DOM — environnement Node. Alias @/* aligné sur tsconfig.
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
  },
});
