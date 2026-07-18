# Boulogne Résidence Hôtel — site web

Site vitrine bilingue (FR/EN) de **Boulogne Résidence Hôtel**, appart-hôtel à
Boulogne-Billancourt. Refonte d'une maquette statique V2 en application
**Next.js 16** production-ready.

**Statut : V1 complète.** 7 pages construites, bilingues, générées en statique
(SSG), revue qualité passée. Différé : vraies photos (pipeline en cours), moteur
de réservation Thaïs, quelques contenus propriétaire marqués « à confirmer ».

## Stack

- **Next.js 16** (App Router, segment `[locale]`) · **React 19** · **TypeScript strict**
- **Tailwind CSS v4** (design tokens V1 en `@theme`)
- **next-intl** (i18n FR/EN)
- **Vitest** (tests unitaires) · **ESLint** (+ `eslint-plugin-boundaries`) · **Prettier** · **Husky**

## Prérequis

**Node 24** (LTS). La machine de dev utilise `nvm` ; le projet a un `.nvmrc` :

```bash
nvm use            # active Node 24 (lit .nvmrc)
npm install
```

## Commandes

| Commande            | Rôle                                               |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Serveur de dev (Turbopack) — http://localhost:3000 |
| `npm run build`     | Build de prod (compile + type-check + SSG)         |
| `npm run start`     | Sert le build de prod                              |
| `npm run lint`      | ESLint (dont frontières de couches)                |
| `npm run format`    | Prettier (réécrit les fichiers)                    |
| `npm run typecheck` | `tsc --noEmit`                                     |
| `npm run test`      | Vitest (parité i18n, getters de contenu, utils)    |

Un hook **pre-commit** (Husky + lint-staged) bloque le commit si lint / format /
type-check / tests échouent.

## Architecture

Architecture en couches à **sens unique** (imposée par `eslint-plugin-boundaries`) :

```
app  →  features  →  components  →  hooks  →  lib  →  config / types
                     (+ i18n / content comme couches socles)
```

```
src/
├─ app/[locale]/       Routes (App Router). Couche de composition.
├─ features/<page>/    Sections par page (home, rooms, quartier, espace-pro, …).
├─ components/
│  ├─ ui/              Primitives (Button, Card, Section, PhotoPlaceholder, Faq, …).
│  └─ layout/          Header, Footer, PageHero, PageCta, CtaCards.
├─ content/{fr,en}/    Contenu éditorial riche, typé (data-driven).
├─ config/             Constantes du site (navigation, PHONE, BOOKING_HREF).
├─ lib/ · hooks/ · types/
└─ i18n/               Config next-intl (routing, navigation, request).
messages/{fr,en}.json  Chaînes d'UI (nav, boutons, titres de section).
```

### i18n

- Deux niveaux : **chaînes d'UI** dans `messages/{fr,en}.json` ; **contenu
  éditorial riche** dans `src/content/{fr,en}/`.
- Navigation toujours via `@/i18n/navigation` (Links localisés `/fr`, `/en`).
- Un test garantit la **parité des clés** FR/EN.

## Conventions

Voir **`CLAUDE.md`** (conventions détaillées, échelle anti-dette) et **`AGENTS.md`**
(⚠️ Next 16 a des changements de rupture vs Next 15).
