'use client';

import { eras } from '@/data/milestones';

export default function EraNav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(`era-${id}`);
    if (el) {
      const offset = 72; // nav height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d0d1a]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
        <span className="font-mono text-xs text-white/30 hidden sm:block shrink-0">
          LLM History
        </span>

        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => scrollTo(era.id)}
              className="shrink-0 px-3 py-1.5 rounded-md text-xs font-medium text-white/50
                hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              {era.label}
              <span className="hidden sm:inline text-white/25 ml-1.5">
                {era.range}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
