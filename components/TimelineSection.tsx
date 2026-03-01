'use client';

import { useState } from 'react';
import { milestones, type Category, categoryColors } from '@/data/milestones';
import Timeline from './Timeline';

const CATEGORIES: Category[] = [
  'Architecture',
  'Language Model',
  'Breakthrough',
  'Frontier',
  'Dataset',
];

export default function TimelineSection() {
  const [active, setActive] = useState<Category | null>(null);

  const filtered = active
    ? milestones.filter((m) => m.category === active)
    : milestones;

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-[58px] z-30 flex justify-center py-3 bg-[#0d0d1a]/70 backdrop-blur-md border-b border-white/5">
        <div className="flex flex-wrap justify-center gap-2 px-4">
          <button
            onClick={() => setActive(null)}
            className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-all
              ${
                active === null
                  ? 'border-white/40 text-white bg-white/10'
                  : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white/60'
              }`}
          >
            All
          </button>

          {CATEGORIES.map((cat) => {
            const c = categoryColors[cat];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(isActive ? null : cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-all
                  ${
                    isActive
                      ? `${c.border} ${c.text} ${c.bg}`
                      : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 text-white/25 font-mono text-sm">
          No entries for this filter.
        </div>
      ) : (
        <Timeline milestones={filtered} />
      )}
    </div>
  );
}
