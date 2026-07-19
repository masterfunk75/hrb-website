'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { dedgeBigCalendarSrc } from '@/config/site';

// Id du <script> loader (repris du snippet officiel D-EDGE) — sert de garde
// anti-double-injection (utile aussi en React StrictMode qui rejoue les effets).
const SCRIPT_ID = 'availpro-calendar';

// Délai au-delà duquel, si le widget n'a rien rendu, on affiche un repli.
// (Cas fréquent : domaine non encore autorisé côté compte D-EDGE, ou hors ligne.)
const RENDER_TIMEOUT_MS = 6000;

type Status = 'loading' | 'ready' | 'unavailable';

// Widget « Big Calendar » du moteur D-EDGE (ex-Availpro).
// Le loader D-EDGE s'injecte côté client et rend le calendrier dans #availpro-root ;
// React n'écrit jamais dans ce conteneur (aucun enfant) → aucun conflit de DOM.
// ⚠️ Le widget est verrouillé par domaine : il ne s'affiche que sur les domaines
// autorisés dans le compte D-EDGE (donc PAS sur localhost). Un MutationObserver
// détecte le rendu ; sinon on bascule sur un repli (le lien direct reste la voie sûre).
export function DedgeCalendar() {
  const locale = useLocale();
  const t = useTranslations('Home');
  const rootRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    // L'état initial est déjà 'loading' ; au changement de langue, le parent
    // remonte le composant via key={locale} (pas de setState synchrone ici).
    const root = rootRef.current;

    // Repart propre (garde anti-double-injection, ex. React StrictMode).
    document.getElementById(SCRIPT_ID)?.remove();
    if (root) root.innerHTML = '';

    // Dès que D-EDGE injecte du contenu dans le conteneur → widget prêt.
    let settled = false;
    const markReady = () => {
      if (!settled) {
        settled = true;
        setStatus('ready');
      }
    };
    const observer = root
      ? new MutationObserver(() => {
          if (root.childElementCount > 0) markReady();
        })
      : null;
    if (root && observer) {
      observer.observe(root, { childList: true, subtree: true });
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = dedgeBigCalendarSrc(locale);
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      if (!settled && (!root || root.childElementCount === 0)) {
        setStatus('unavailable');
      }
    }, RENDER_TIMEOUT_MS);

    return () => {
      observer?.disconnect();
      clearTimeout(timer);
      script.remove();
    };
  }, [locale]);

  return (
    <div className="border-line bg-canvas rounded-lg border p-4 sm:p-6">
      {/* Cible de rendu du widget D-EDGE. */}
      <div id="availpro-root" ref={rootRef} className="min-h-[3rem]" />
      {status !== 'ready' && (
        <p className="text-muted text-sm" role="status" aria-live="polite">
          {status === 'loading'
            ? t('bookingWidgetLoading')
            : t('bookingWidgetUnavailable')}
        </p>
      )}
    </div>
  );
}
