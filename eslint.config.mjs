import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import boundaries from 'eslint-plugin-boundaries';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Désactive les règles ESLint de mise en forme qui entreraient en conflit
  // avec Prettier. DOIT rester après les configs Next pour les neutraliser.
  eslintConfigPrettier,

  // --- Architecture en couches (eslint-plugin-boundaries) ---
  // Chaque dossier de src/ = une couche. Les imports ne vont que dans un sens
  // (app → features → components → hooks → lib → config/types ; i18n/content = socles).
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { boundaries },
    settings: {
      // Permet à boundaries de résoudre l'alias @/* (sinon il ne suit pas les imports).
      'import/resolver': {
        typescript: { alwaysTryTypes: true },
      },
      // Mode dossier : tout le sous-arbre d'un dossier appartient à la couche.
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app' },
        { type: 'features', pattern: 'src/features' },
        { type: 'components', pattern: 'src/components' },
        { type: 'hooks', pattern: 'src/hooks' },
        { type: 'lib', pattern: 'src/lib' },
        { type: 'i18n', pattern: 'src/i18n' },
        { type: 'content', pattern: 'src/content' },
        { type: 'config', pattern: 'src/config' },
        { type: 'types', pattern: 'src/types' },
      ],
    },
    rules: {
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          // Chaque couche ne peut importer que d'elle-même et des couches "en dessous".
          rules: [
            {
              from: { type: 'app' },
              allow: {
                to: {
                  type: [
                    'app',
                    'features',
                    'components',
                    'hooks',
                    'lib',
                    'i18n',
                    'content',
                    'config',
                    'types',
                  ],
                },
              },
            },
            {
              from: { type: 'features' },
              allow: {
                to: {
                  type: [
                    'features',
                    'components',
                    'hooks',
                    'lib',
                    'i18n',
                    'content',
                    'config',
                    'types',
                  ],
                },
              },
            },
            {
              from: { type: 'components' },
              allow: {
                to: {
                  type: [
                    'components',
                    'hooks',
                    'lib',
                    'i18n',
                    'config',
                    'types',
                  ],
                },
              },
            },
            {
              from: { type: 'hooks' },
              allow: {
                to: { type: ['hooks', 'lib', 'i18n', 'config', 'types'] },
              },
            },
            {
              from: { type: 'lib' },
              allow: { to: { type: ['lib', 'config', 'types'] } },
            },
            {
              from: { type: 'i18n' },
              allow: { to: { type: ['i18n', 'config', 'types'] } },
            },
            {
              from: { type: 'content' },
              allow: { to: { type: ['content', 'config', 'types'] } },
            },
            {
              from: { type: 'config' },
              allow: { to: { type: ['config', 'types'] } },
            },
            {
              from: { type: 'types' },
              allow: { to: { type: ['types'] } },
            },
          ],
        },
      ],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Matériel de référence (maquette handoff) — hors application, ne pas linter
    '_handoff-v2/**',
    'brh-v2-export/**',
  ]),
]);

export default eslintConfig;
