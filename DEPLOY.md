# Déploiement — Boulogne Résidence Hôtel

Site **Next.js 16** (App Router, SSG + i18n FR/EN). Hébergeur conseillé : **Vercel**
(support natif Next.js, Node 24, optimisation d'images incluse). Le repo est déjà
prêt : `npm run build` passe, `engines.node = 24.x` épinglé.

## Prérequis (côté propriétaire)

- Un compte **Vercel** (gratuit pour commencer) — https://vercel.com
- L'accès au **registrar du nom de domaine** (là où le domaine a été acheté)
- Un contact **D-EDGE** pour faire **autoriser le domaine** (moteur de réservation)

> Ces étapes demandent des identifiants / un compte : elles se font **par le
> propriétaire**. L'assistant ne crée pas de compte et ne gère pas de mot de passe.

## 1. Importer le projet dans Vercel

1. Vercel → **Add New… → Project**.
2. **Import** le dépôt GitHub `masterfunk75/hrb-website` (autoriser Vercel à accéder au repo si demandé).
3. Vercel détecte **Next.js** automatiquement — laisser les réglages par défaut
   (Build `next build`, Output automatique). **Node.js : 24.x** (déjà imposé par `engines`).
4. **Deploy**. Premier déploiement → une URL `xxxxx.vercel.app` pour vérifier le site.

> Ensuite, **chaque push sur `main` redéploie automatiquement** la production.
> Les branches / PR obtiennent des _preview deployments_.

## 2. Variable d'environnement

Dans Vercel → projet → **Settings → Environment Variables**, ajouter (scope
_Production_, puis _Preview_ si voulu) :

| Nom                    | Valeur                                     |
| ---------------------- | ------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | `https://<votre-domaine>` (sans `/` final) |

Sert de base au **sitemap**, aux **URL canoniques** et à l'**Open Graph**.
Tant qu'elle n'est pas définie, un domaine par défaut est utilisé (à corriger).
Après l'avoir ajoutée : **redéployer** (Deployments → … → Redeploy).

## 3. Nom de domaine (DNS)

1. Vercel → projet → **Settings → Domains → Add** → saisir le domaine.
2. Suivre les instructions DNS de Vercel chez le **registrar** :
   - domaine racine → enregistrement **A** vers l'IP indiquée par Vercel,
   - `www` → enregistrement **CNAME** `cname.vercel-dns.com` (ou selon l'écran Vercel).
3. Attendre la propagation DNS (quelques minutes à quelques heures). Vercel gère
   le **HTTPS** (certificat) automatiquement.

## 4. ⚠️ Autoriser le domaine chez D-EDGE (moteur de réservation)

Le widget « Big Calendar » D-EDGE est **verrouillé par domaine** : il ne s'affiche
que sur les domaines autorisés dans le compte D-EDGE (donc **pas** sur `localhost`
ni sur l'URL `*.vercel.app`).

➡️ **Demander à D-EDGE d'autoriser le domaine final** (et éventuellement l'URL
Vercel de préproduction). Sans ça, le calendrier reste masqué — mais le **bouton
« Réserver sur le moteur sécurisé »** (lien direct) et le **téléphone** fonctionnent
déjà : la réservation n'est jamais bloquée.

## 5. Vérifications après mise en ligne

- [ ] Site accessible en HTTPS sur le domaine, `/` redirige vers `/fr`.
- [ ] Bascule **FR / EN** OK ; `/sitemap.xml` et `/robots.txt` avec le bon domaine.
- [ ] **Calendrier D-EDGE** s'affiche (après autorisation domaine) ; sinon le repli.
- [ ] Bouton **« Réserver sur le moteur sécurisé »** ouvre bien la page D-EDGE.
- [ ] **Photos** présentes partout ; **métadonnées** (titres, OG) correctes.
- [ ] Pages **légales** accessibles (footer).

## 6. À finaliser (contenu — hors technique)

- [ ] Compléter les mentions **`[à confirmer]`** des pages légales (éditeur, SIRET,
      hébergeur, DPO…) et **faire valider** par un conseil juridique.
- [ ] Compléter les autres `[à confirmer]` de contenu (adresses quartier, etc.).
- [ ] (Optionnel) Brancher le **formulaire de devis** (Espace Pro) à un backend e-mail/CRM.
