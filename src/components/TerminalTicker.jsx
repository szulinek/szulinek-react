import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const scrambleCharacters = ['/', '-', '_', '.', ':', '#', '*'];

function getPrefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return undefined;
    }

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    if (query.addEventListener) {
      query.addEventListener('change', updatePreference);
      return () => query.removeEventListener('change', updatePreference);
    }

    query.addListener(updatePreference);
    return () => query.removeListener(updatePreference);
  }, []);

  return prefersReducedMotion;
}

function useIsMobileTicker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return undefined;
    }

    const query = window.matchMedia('(max-width: 767px)');
    const updateViewport = () => setIsMobile(query.matches);

    updateViewport();
    if (query.addEventListener) {
      query.addEventListener('change', updateViewport);
      return () => query.removeEventListener('change', updateViewport);
    }

    query.addListener(updateViewport);
    return () => query.removeListener(updateViewport);
  }, []);

  return isMobile;
}

export default function TerminalTicker({ className = '', variant = 'panel' }) {
  const { t } = useLanguage();
  const isLogo = variant === 'logo';
  const isMobileTicker = useIsMobileTicker();
  const texts = isMobileTicker ? t.terminalTicker.mobileTexts : t.terminalTicker.texts;
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldUseStaticText = prefersReducedMotion || isMobileTicker;
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    setIndex(0);
    setDisplayedText('');
    setPhase('typing');
  }, [texts]);

  useEffect(() => {
    if (shouldUseStaticText) {
      setDisplayedText(texts[0]);
      setPhase('typing');
      setIndex(0);
      return undefined;
    }

    const fullText = texts[index] || texts[0];

    const timeoutId = window.setTimeout(() => {
      if (phase === 'typing') {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
          return;
        }

        setPhase('pause');
        return;
      }

      if (phase === 'pause') {
        setPhase('deleting');
        return;
      }

      if (displayedText.length > 0) {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
        return;
      }

      setIndex((value) => (value + 1) % texts.length);
      setPhase('typing');
    }, delayForPhase(phase, displayedText.length));

    return () => window.clearTimeout(timeoutId);
  }, [displayedText, index, phase, shouldUseStaticText, texts]);

  const currentText = shouldUseStaticText ? texts[0] : displayedText;
  const scrambleCharacter =
    !shouldUseStaticText && phase !== 'pause' && currentText
      ? scrambleCharacters[(currentText.length + index) % scrambleCharacters.length]
      : '';

  return (
    <div
      className={`${
        isLogo
          ? 'terminal-ticker-logo inline-flex w-fit max-w-full text-[0.78rem] text-terminal sm:text-sm'
          : 'terminal-ticker flex h-10 w-full items-center overflow-hidden rounded-lg border border-terminal/25 bg-terminal-panel px-3 text-xs text-terminal sm:h-11 sm:px-4 sm:text-sm'
      } ${className}`}
      aria-hidden="true"
      data-static={shouldUseStaticText ? 'true' : 'false'}
    >
      <div className="terminal-ticker-shake relative z-10 flex h-full min-w-0 items-center gap-2 font-mono">
        <span className="shrink-0 text-terminal" aria-hidden="true">
          $
        </span>
        <span
          className={`${isLogo ? 'brand-terminal-copy' : 'min-w-0 flex-1 overflow-hidden whitespace-nowrap'}`}
          aria-hidden="true"
        >
          <span className="terminal-ticker-text" data-text={currentText}>
            {currentText}
          </span>
          {scrambleCharacter && (
            <span className="terminal-scramble" aria-hidden="true">
              {scrambleCharacter}
            </span>
          )}
          <span className="terminal-ticker-cursor" />
        </span>
      </div>
    </div>
  );
}

function delayForPhase(phase, length) {
  if (phase === 'pause') {
    return 1250;
  }

  if (phase === 'deleting') {
    return 24;
  }

  return 34 + (length % 4) * 11;
}
