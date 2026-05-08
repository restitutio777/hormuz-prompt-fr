import { useState, useMemo, useCallback } from 'react';
import { assemblePrompt, situationCategories } from '../data/promptTemplates';

const SINGLE_SELECT_CATEGORY = 'taille_menage';

export function usePromptBuilder() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [freeText, setFreeText] = useState('');
  const [copied, setCopied] = useState(false);

  const singleSelectIds = useMemo(() => {
    const cat = situationCategories.find((c) => c.id === SINGLE_SELECT_CATEGORY);
    return new Set(cat?.items.map((i) => i.id) ?? []);
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (singleSelectIds.has(id)) {
            for (const otherId of singleSelectIds) next.delete(otherId);
          }
          next.add(id);
        }
        return next;
      });
    },
    [singleSelectIds]
  );

  const prompt = useMemo(
    () => assemblePrompt(selectedIds, freeText),
    [selectedIds, freeText]
  );

  const hasSelection = selectedIds.size > 0 || freeText.trim().length > 0;

  const copyToClipboard = useCallback(async () => {
    if (!prompt) return;
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = prompt;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [prompt]);

  return {
    categories: situationCategories,
    selectedIds,
    toggle,
    freeText,
    setFreeText,
    hasSelection,
    prompt,
    copyToClipboard,
    copied,
  };
}
