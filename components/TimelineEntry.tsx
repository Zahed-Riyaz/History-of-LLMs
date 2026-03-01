'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  type Milestone,
  categoryColors,
  milestoneByYear,
} from '@/data/milestones';

type Props = {
  milestone: Milestone;
  index: number;
};

function scrollToYear(year: number) {
  const el = document.getElementById(`milestone-${year}`);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function TimelineEntry({ milestone, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState(false);
  const isRight = index % 2 === 0;
  const c = categoryColors[milestone.category];

  return (
    <div
      id={`milestone-${milestone.year}`}
      ref={ref}
      className={`relative flex items-start ${
        isRight ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0
          ${isRight ? 'md:pr-8' : 'md:pl-8'}
        `}
      >
        <div
          className={`relative rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm
            transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]
            border-l-2 md:border-l-0
            ${isRight ? 'md:border-r-2' : 'md:border-l-2'}
            ${c.border}
            ${
              milestone.highlight
                ? 'ring-1 ring-offset-0 shadow-xl ' +
                  (milestone.category === 'Frontier'
                    ? 'ring-yellow-500/20 shadow-yellow-500/10'
                    : 'ring-purple-500/20 shadow-purple-500/15')
                : ''
            }
          `}
        >
          {/* Header */}
          <div className="p-5 pb-3">
            {/* Year badge */}
            <div
              className={`inline-block font-mono text-xs font-bold px-2 py-0.5 rounded border mb-3 ${c.border} ${c.text} ${c.bg}`}
            >
              {milestone.year}
            </div>

            <h3 className="text-white font-semibold text-base leading-snug mb-3">
              {milestone.title}
            </h3>

            {/* Quote callout */}
            {milestone.quote && (
              <blockquote
                className={`relative mb-3 pl-3 border-l-2 ${c.border} text-[11px] italic leading-relaxed ${c.text} opacity-80`}
              >
                {milestone.quote}
              </blockquote>
            )}

            <p className="text-white/60 text-sm leading-relaxed">
              {milestone.description}
            </p>
          </div>

          {/* Deep dive accordion */}
          {milestone.deepDive && (
            <div className="px-5 pb-3">
              <button
                onClick={() => setExpanded((v) => !v)}
                className={`flex items-center gap-1.5 text-[11px] font-mono font-semibold ${c.text} opacity-70 hover:opacity-100 transition-opacity`}
              >
                <span
                  className="transition-transform duration-200"
                  style={{ transform: expanded ? 'rotate(90deg)' : 'none' }}
                >
                  ▶
                </span>
                {expanded ? 'Hide deep dive' : 'Deep dive'}
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key="deep"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`mt-2 p-3 rounded-lg text-[12px] leading-relaxed text-white/70 ${c.bg} border ${c.border} border-opacity-30`}
                    >
                      {milestone.deepDive.fact}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Footer: tags + links + connections */}
          <div className="px-5 pb-4 pt-1 space-y-2">
            {/* Category tag + paper links */}
            <div className="flex flex-wrap gap-2 items-center">
              <span
                className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border ${c.border} ${c.text} ${c.bg}`}
              >
                {milestone.category}
              </span>
              {milestone.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-white/35 hover:text-cyan-400 underline underline-offset-2 transition-colors"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>

            {/* Influence connections */}
            {(milestone.influencedBy?.length || milestone.ledTo?.length) ? (
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {milestone.influencedBy && milestone.influencedBy.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="text-[10px] text-white/25 font-mono">← influenced by</span>
                    {milestone.influencedBy.map((yr) => (
                      <button
                        key={yr}
                        onClick={() => scrollToYear(yr)}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-white/10 text-white/40
                          hover:border-purple-500/50 hover:text-purple-400 transition-all"
                      >
                        {milestoneByYear[yr] ?? yr}
                      </button>
                    ))}
                  </div>
                )}
                {milestone.ledTo && milestone.ledTo.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="text-[10px] text-white/25 font-mono">→ led to</span>
                    {milestone.ledTo.map((yr) => (
                      <button
                        key={yr}
                        onClick={() => scrollToYear(yr)}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-white/10 text-white/40
                          hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                      >
                        {milestoneByYear[yr] ?? yr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>

      {/* Center dot (desktop) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
        style={{ top: '22px' }}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 bg-[#0d0d1a] ${c.border}
            ${milestone.highlight ? 'w-5 h-5 shadow-lg shadow-purple-500/40' : ''}`}
        />
      </motion.div>

      {/* Mobile dot */}
      <div
        className={`absolute left-0 top-5 md:hidden w-3 h-3 rounded-full border-2 ${c.border} bg-[#0d0d1a]`}
      />

      {/* Spacer for opposite side (desktop) */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}
