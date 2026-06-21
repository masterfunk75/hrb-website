@AGENTS.md

# CLAUDE.md — Conventions du projet BRH

> Site **Boulogne Résidence Hôtel** — appart-hôtel à Boulogne-Billancourt.
> Maquette V2 statique → **Next.js 16 (App Router) + TypeScript strict + Tailwind v4 + next-intl (FR/EN)**.
> ⚠️ Next 16 a des **changements de rupture** vs Next 15 (cf. `AGENTS.md` ci-dessus). En cas de doute sur une API Next / Tailwind / next-intl : **utiliser Context7** (doc à jour) plutôt que la mémoire.

À relire en début de chaque session.

## Commandes

| Commande            | Rôle                                                            |
| ------------------- | --------------------------------------------------------------- |
| `nvm use`           | Active Node 24 (lit `.nvmrc`) — **à faire en début de session** |
| `npm run dev`       | Serveur de dev (Turbopack)                                      |
| `npm run build`     | Build de prod (compile + type-check)                            |
| `npm run lint`      | ESLint                                                          |
| `npm run format`    | Prettier (réécrit les fichiers)                                 |
| `npm run typecheck` | `tsc --noEmit`                                                  |

Le **hook pre-commit** (Husky + lint-staged) bloque le commit si lint / format / type-check échouent.

## Architecture en couches — règle de dépendance (SENS UNIQUE)

Les imports vont dans **un seul sens**, jamais l'inverse :

```
app  →  features  →  components  →  hooks  →  lib  →  config / types
                       (+ i18n / content comme couches socles)
```

- **`app/`** — routes (App Router, segment `[locale]`). Couche de composition. Peut tout importer. **Pas** de logique métier.
- **`features/`** — modules par fonctionnalité (ex. `booking`, `quartier-map`). Importe components, hooks, lib, i18n, content, config, types.
- **`components/`** — UI réutilisable : `components/ui/` (atomiques) + `components/layout/` (Header, Footer…). Importe hooks, lib, i18n, config, types. **Pas** features ni app.
- **`hooks/`** — hooks React partagés. Importe lib, i18n, config, types.
- **`lib/`** — utilitaires purs / services (pas de React). Importe config, types.
- **`i18n/`** — config next-intl (routing, navigation, request). Socle importable par les couches au-dessus.
- **`content/`** — contenu éditorial structuré par langue (`content/fr`, `content/en`). Données pures.
- **`config/`** — constantes du site. · **`types/`** — types TS partagés. Feuilles (n'importent rien d'interne).

> Règle **enforced par `eslint-plugin-boundaries`** : un import interdit casse le lint → casse le commit.

## i18n (next-intl, FR/EN)

- **Routing** : `src/i18n/routing.ts` — locales `['fr','en']`, défaut `fr`. URLs préfixées `/fr/...`, `/en/...`. `/` → redirige vers `/fr`.
- ⚠️ **Next 16** : le middleware s'appelle **`src/proxy.ts`** (ex-`middleware.ts`).
- **Navigation** : toujours `Link`, `redirect`, `usePathname`, `useRouter` depuis **`@/i18n/navigation`** — jamais `next/link` / `next/navigation` directs (sinon le préfixe de langue saute).
- **Deux niveaux de texte** :
  - **Chaînes d'UI** (nav, boutons, labels) → `messages/{fr,en}.json` via `useTranslations` (client) / `getTranslations` (serveur).
  - **Contenu éditorial riche** (textes longs des pages) → `src/content/{fr,en}/` (TS typé). Ne **pas** mettre ces longs textes dans les messages JSON.
- **Clés** : namespacées par zone, en camelCase (ex. `Construction.title`).
- **Rendu statique** : `setRequestLocale(locale)` en haut de chaque layout/page localisé.

## React / Next

- **Server Components par défaut.** `'use client'` **uniquement** si interactivité (état, effets, handlers, hooks navigateur).
- Pas de `fetch` de données dans `components/` : la récupération vit dans `lib/` ou les Server Components de `app/`.
- Pas de logique métier dans l'UI : elle vit dans `lib/` / `features/`.

## Anti-dette — échelle de décision avant d'écrire du code

(Inspirée du skill _ponytail_ — intégrée ici plutôt qu'en dépendance externe.)

1. **Ça doit exister ?** Sinon on ne l'écrit pas (YAGNI).
2. **La lib standard / le langage le fait ?** → l'utiliser.
3. **Une feature native (Next / React / Tailwind) le fait ?** → l'utiliser.
4. **Une dépendance déjà installée le fait ?** → la réutiliser. Pas de nouvelle dépendance sans justification.
5. **Ça tient en une ligne ?** → une ligne.
6. **Sinon** : le minimum qui marche.

> Jamais au détriment de : **sécurité, validation des entrées, accessibilité, gestion d'erreurs**, ni des **commentaires pédagogiques** (ce projet sert aussi à apprendre) ni des **frontières de couches**.

## Conventions de nommage

- Fichiers composants : `kebab-case.tsx` ; composant exporté en `PascalCase`.
- Hooks : `use-x.ts` → `useX`. Utilitaires : `kebab-case.ts`. Types : `PascalCase`.
- Pas de barrel `index.ts` sauf besoin réel.

## Patterns à éviter

- ❌ Texte en dur dans le JSX → clé i18n.
- ❌ `next/link` / `next/navigation` directs → `@/i18n/navigation`.
- ❌ Logique métier ou `fetch` dans `components/`.
- ❌ Import qui « remonte » une couche (ex. `lib` important `components`).
- ❌ `any` non justifié.
- ❌ Nouvelle dépendance sans passer l'échelle de décision ci-dessus.

## Checklist avant commit

1. Sens des imports respecté (architecture) ?
2. Pas de duplication ? Noms clairs ?
3. Server/Client Component approprié ?
4. Textes via i18n (pas de hardcode) ?
5. `npm run lint` + `npm run typecheck` + `npm run build` passent ?
6. Commit **atomique** + message **conventional commit** (`feat:`, `fix:`, `chore:`, `docs:`…).

## MCP

- **Context7** — doc à jour des libs (Next 16, next-intl, Tailwind…). À mobiliser dès qu'une API est incertaine.
- **Serena** — navigation/édition symbolique du code (utile pour les refactors).
