import { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';
import { usePromptBuilder } from '../hooks/usePromptBuilder';
import SituationSelector from './SituationSelector';

const CONTEXT_ITEMS = [
  {
    label: 'Chauffage : commander est encore possible',
    text: 'Pellets, bois, fioul : les délais de livraison sont de 6 à 8 semaines. Qui attend août n\u2019a plus de marge avant l\u2019hiver. Les prix montent chaque mois.',
    action: '→ Comparer les prix et passer commande maintenant',
  },
  {
    label: 'Le pétrole est partout — pas que dans le réservoir',
    text: 'Plastiques, produits d\u2019entretien, textiles synthétiques, matériaux de construction, emballages alimentaires — tout cela dépend du pétrole. Rouler en électrique ne met pas à l\u2019abri.',
  },
  {
    label: 'Réserve de liquidités',
    text: 'En cas de stress bancaire, des plafonds de retrait peuvent être imposés du jour au lendemain. Ce n\u2019est pas de la théorie — c\u2019est arrivé en Grèce en 2015. Avoir une semaine de dépenses courantes en liquide chez soi n\u2019est pas de l\u2019alarmisme.',
    action: '→ Retirer progressivement, pas d\u2019un coup',
  },
  {
    label: 'L\u2019eau du robinet dépend aussi de l\u2019import',
    text: 'Les stations d\u2019épuration utilisent du chlore et des floculants issus des mêmes chaînes logistiques. Pas de risque immédiat — mais pertinent si la crise dure au-delà de 3 mois.',
  },
  {
    label: 'La fenêtre : c\u2019est maintenant',
    text: 'Mi-juillet, c\u2019est la dernière fenêtre pratique avant l\u2019automne. Après, commander, se faire livrer et stocker devient plus difficile — pas impossible, mais plus cher et plus lent.',
    accent: true,
  },
];

export default function CrisisPromptGenerator() {
  const { categories, selectedIds, toggle, freeText, setFreeText, hasSelection, prompt, copyToClipboard, copied } =
    usePromptBuilder();
  const [contextOpen, setContextOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-accent mb-4">
          Mise à jour : 12 juillet 2026 · Gratuit · sans inscription
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-4 leading-tight">
          Hormuz bloqué — qu'est-ce que ça change pour vous&nbsp;?
        </h1>
        <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Cochez votre situation ci-dessous. Vous recevez un prompt personnalisé — collez-le dans ChatGPT, Claude ou Gemini et obtenez vos priorités, vos délais et des actions concrètes. 2&nbsp;minutes.
        </p>
      </div>

      {/* Situation selector */}
      <div className="bg-accent/[0.04] rounded-2xl p-5 sm:p-8 border border-accent/15 shadow-sm mb-6">
        <SituationSelector
          categories={categories}
          selectedIds={selectedIds}
          onToggle={toggle}
        />

        {/* Free-text field */}
        <div className="mt-6 pt-6 border-t border-accent/10">
          <label
            htmlFor="free-situation"
            className="block text-[0.65rem] font-semibold text-accent/70 uppercase tracking-[0.12em] mb-3"
          >
            Votre situation en vos propres mots
          </label>
          <textarea
            id="free-situation"
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            placeholder={'Ex. « Je suis graphiste, mes clients sont des sous-traitants automobiles » ou « Je travaille dans le soin et mon employeur se chauffe au gaz »'}
            rows={3}
            className="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 leading-relaxed resize-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
          />
          <p className="text-xs text-text-tertiary mt-2">
            Optionnel — plus c'est précis, meilleure sera l'analyse. Métier, secteur, circonstances particulières.
          </p>
        </div>
      </div>

      {/* Context — expandable */}
      <div className="rounded-2xl border border-accent/15 shadow-sm mb-6 overflow-hidden">
        <button
          type="button"
          onClick={() => setContextOpen(!contextOpen)}
          className="w-full flex items-center justify-between px-5 sm:px-8 py-4 text-left bg-accent/[0.04] hover:bg-accent/[0.06] transition-colors duration-200 cursor-pointer"
          aria-expanded={contextOpen}
        >
          <span className="text-sm font-medium text-text-secondary">
            Ce que beaucoup ignorent
          </span>
          <ChevronDown
            className={`w-4 h-4 text-accent/50 transition-transform duration-300 ${contextOpen ? 'rotate-180 text-accent' : ''}`}
          />
        </button>
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: contextOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="px-5 sm:px-8 pt-2 pb-5 space-y-4">
              {CONTEXT_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={`text-sm leading-relaxed ${item.accent ? 'border-l-2 border-accent/40 pl-4' : ''}`}
                >
                  <p className="font-medium text-text-primary mb-1">{item.label}</p>
                  <p className="text-text-secondary">{item.text}</p>
                  {item.action && (
                    <p className="text-accent text-xs mt-1">{item.action}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Generated prompt */}
      {hasSelection && (
        <div className="bg-accent/[0.04] rounded-2xl p-5 sm:p-8 border border-accent/15 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 className="font-serif text-xl font-bold text-text-primary">
              Votre prompt personnalisé
            </h2>
            <button
              type="button"
              onClick={copyToClipboard}
              className={[
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer',
                copied
                  ? 'bg-success text-text-inverse'
                  : 'bg-accent text-text-inverse hover:bg-accent-hover hover:shadow-md hover:scale-[1.02] active:scale-[0.98]',
              ].join(' ')}
            >
              {copied ? (
                <><Check className="w-4 h-4" />Copié !</>
              ) : (
                <><Copy className="w-4 h-4" />Copier le prompt</>
              )}
            </button>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-4 sm:p-5 font-mono text-xs sm:text-sm text-text-secondary whitespace-pre-wrap leading-relaxed max-h-72 sm:max-h-80 overflow-y-auto">
            {prompt}
          </div>

          {/* Instructions */}
          <div className="mt-5 pt-5 border-t border-accent/10">
            <p className="text-sm text-text-tertiary leading-relaxed mb-3">
              <span className="text-text-secondary font-medium">Comment ça marche :</span>
            </p>
            <ol className="text-sm text-text-tertiary leading-relaxed space-y-1.5 list-none">
              <li className="flex items-start gap-2">
                <span className="text-accent font-semibold shrink-0">1.</span>
                <span>Cliquez sur <span className="text-text-secondary font-medium">« Copier le prompt »</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-semibold shrink-0">2.</span>
                <span>
                  Ouvrez{' '}
                  <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium hover:text-accent transition-colors underline underline-offset-2">ChatGPT</a>,{' '}
                  <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium hover:text-accent transition-colors underline underline-offset-2">Claude</a>{' '}ou{' '}
                  <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium hover:text-accent transition-colors underline underline-offset-2">Gemini</a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-semibold shrink-0">3.</span>
                <span>Collez le texte — l'IA analyse votre situation et propose des actions concrètes</span>
              </li>
            </ol>
            <p className="text-xs text-text-tertiary leading-relaxed mt-3 bg-accent/[0.04] rounded-lg px-3 py-2">
              Compatible avec <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium underline underline-offset-2 hover:text-accent transition-colors">ChatGPT</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium underline underline-offset-2 hover:text-accent transition-colors">Claude</a> ou <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium underline underline-offset-2 hover:text-accent transition-colors">Gemini</a>.
            </p>
          </div>
        </div>
      )}

      {/* Empty state — placeholder when no prompt yet */}
      {!hasSelection && (
        <div className="bg-accent/[0.04] rounded-2xl p-5 sm:p-8 border border-dashed border-accent/20">
          <h2 className="font-serif text-xl font-bold text-text-primary mb-5 text-center">
            Votre analyse personnalisée
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div className="flex sm:flex-col items-start sm:items-center gap-3 sm:gap-2 sm:text-center">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center">1</span>
              <p className="text-sm text-text-secondary"><span className="text-text-primary font-medium">Cochez</span> ce qui vous concerne ci-dessus</p>
            </div>
            <div className="flex sm:flex-col items-start sm:items-center gap-3 sm:gap-2 sm:text-center">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center">2</span>
              <p className="text-sm text-text-secondary"><span className="text-text-primary font-medium">Copiez</span> le prompt généré</p>
            </div>
            <div className="flex sm:flex-col items-start sm:items-center gap-3 sm:gap-2 sm:text-center">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center">3</span>
              <p className="text-sm text-text-secondary"><span className="text-text-primary font-medium">Collez</span> dans ChatGPT, Claude ou Gemini</p>
            </div>
          </div>
          <div className="border-t border-accent/10 pt-4">
            <p className="text-xs text-text-tertiary leading-relaxed text-center">
              L'IA analyse votre situation et vous donne : vos 5 priorités classées par urgence, des actions concrètes avec coûts estimés, et un calendrier adapté.
            </p>
          </div>
        </div>
      )}

      {/* Link to briefing */}
      <a
        href="https://hormuz-fr.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 flex items-start gap-4 bg-accent/[0.06] hover:bg-accent/[0.1] border border-accent/15 hover:border-accent/30 rounded-2xl px-6 py-5 text-left transition-all duration-200 hover:shadow-md"
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/15 flex items-center justify-center transition-colors duration-200 mt-0.5 text-accent font-bold text-lg">
          ↗
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base font-semibold text-text-primary">État des lieux interactif</span>
            <span className="text-xs text-accent font-semibold uppercase tracking-wide border border-accent/25 rounded px-1.5 py-0.5">19.05.</span>
          </div>
          <p className="text-sm text-text-secondary leading-snug">
            Calendrier, effets domino, fourchettes de prix — ce qui attend les ménages européens et quand.
          </p>
        </div>
      </a>

      {/* Share */}
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-sm text-text-secondary mb-3">Quelqu'un dans votre entourage pourrait en avoir besoin&nbsp;?</p>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              navigator.clipboard.writeText('https://hormuz-prompt-fr.vercel.app');
              const btn = document.getElementById('share-copy-btn');
              if (btn) { btn.textContent = 'Copié ✓'; setTimeout(() => btn.textContent = 'Copier le lien', 2000); }
            }}
            id="share-copy-btn"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border hover:border-accent/30 bg-surface hover:bg-accent/[0.06] text-sm text-text-secondary hover:text-accent transition-all duration-200"
          >
            Copier le lien
          </button>
          <a
            href="https://wa.me/?text=Un%20outil%20pour%20anticiper%20les%20effets%20de%20la%20crise%20d%27Hormuz%20sur%20ton%20quotidien%20%3A%20https%3A%2F%2Fhormuz-prompt-fr.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border hover:border-accent/30 bg-surface hover:bg-accent/[0.06] text-sm text-text-secondary hover:text-accent transition-all duration-200"
          >
            WhatsApp
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhormuz-prompt-fr.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border hover:border-accent/30 bg-surface hover:bg-accent/[0.06] text-sm text-text-secondary hover:text-accent transition-all duration-200"
          >
            Facebook
          </a>
          <a
            href="fb-messenger://share/?link=https%3A%2F%2Fhormuz-prompt-fr.vercel.app"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border hover:border-accent/30 bg-surface hover:bg-accent/[0.06] text-sm text-text-secondary hover:text-accent transition-all duration-200"
          >
            Messenger
          </a>
          <a
            href="mailto:?subject=Crise%20d%27Hormuz%20%E2%80%94%20outil%20pratique&body=Un%20outil%20pour%20anticiper%20les%20effets%20de%20la%20crise%20d%27Hormuz%20sur%20ton%20quotidien%20%3A%0A%0Ahttps%3A%2F%2Fhormuz-prompt-fr.vercel.app"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border hover:border-accent/30 bg-surface hover:bg-accent/[0.06] text-sm text-text-secondary hover:text-accent transition-all duration-200"
          >
            E-mail
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 pt-6 border-t border-border text-xs text-text-tertiary leading-relaxed text-center">
        Outil indépendant · Aucune donnée collectée · Code source ouvert
      </footer>
    </div>
  );
}
