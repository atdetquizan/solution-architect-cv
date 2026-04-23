import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0;
      setProgress(value);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', update);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        style={{ width: `${progress}%` }}
        className="fixed top-0 left-0 z-50 h-0.5 bg-[var(--accent)] transition-[width] duration-150"
      />
      <button
        type="button"
        className="fixed right-5 bottom-5 z-40 rounded-full border border-[var(--line-strong)] bg-[var(--panel)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] backdrop-blur-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Top
      </button>
    </>
  );
};

export default ScrollProgress;
