import type { SituationCategory } from '../data/promptTemplates';

interface SituationSelectorProps {
  categories: SituationCategory[];
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
}

export default function SituationSelector({ categories, selectedIds, onToggle }: SituationSelectorProps) {
  return (
    <div className="space-y-7">
      {categories.map((category) => (
        <div key={category.id}>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-accent/70 mb-3">
            {category.label}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {category.items.map((item) => {
              const isActive = selectedIds.has(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onToggle(item.id)}
                  className={[
                    'group relative rounded-full px-4 py-2.5 text-sm transition-all duration-200 cursor-pointer select-none',
                    isActive
                      ? 'bg-accent/15 text-accent font-semibold shadow-[0_0_0_1.5px] shadow-accent ring-1 ring-accent/30'
                      : 'bg-white/50 text-text-secondary shadow-[0_0_0_1px] shadow-border hover:shadow-text-secondary/30 hover:text-text-primary hover:bg-white/80',
                  ].join(' ')}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={[
                        'inline-flex items-center justify-center w-4 h-4 rounded-full border transition-all duration-200 shrink-0',
                        isActive
                          ? 'border-accent bg-accent'
                          : 'border-text-tertiary/50 group-hover:border-text-secondary/60',
                      ].join(' ')}
                    >
                      {isActive && (
                        <svg className="w-2.5 h-2.5 text-text-inverse" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2,6 5,9 10,3" />
                        </svg>
                      )}
                    </span>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
