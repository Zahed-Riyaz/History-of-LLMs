'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { type Milestone, categoryColors } from '@/data/milestones';

type Props = {
  milestone: Milestone;
  index: number;
};

export default function TimelineEntry({ milestone, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isRight = index % 2 === 0;
  const colors = categoryColors[milestone.category];

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-0 ${
        isRight ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-0`}
    >
      {/* Card side */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full md:w-[calc(50%-2rem)] ${isRight ? 'md:pr-8 md:text-right' : 'md:pl-8'} pl-10 md:pl-0`}
      >
        <div
          className={`relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm
            transition-all duration-300 hover:-translate-y-1 hover:bg-white/8
            ${isRight ? 'md:border-r-2' : 'border-l-2 md:border-l-2 md:border-r-0'}
            ${colors.border}
            ${milestone.highlight ? 'ring-1 ring-offset-0 shadow-lg ' + (milestone.category === 'Frontier' ? 'ring-yellow-500/30 shadow-yellow-500/10' : 'ring-purple-500/40 shadow-purple-500/20') : ''}
          `}
        >
          {milestone.highlight && (
            <div className="absolute -inset-px rounded-xl opacity-20 blur-sm bg-gradient-to-br from-purple-500 to-cyan-500 -z-10" />
          )}

          {/* Year badge */}
          <div
            className={`inline-block font-mono text-xs font-bold px-2 py-0.5 rounded border mb-3
              ${colors.border} ${colors.text} ${colors.bg}
              ${isRight ? '' : ''}
            `}
          >
            {milestone.year}
          </div>

          <h3 className="text-white font-semibold text-base mb-2 leading-snug">
            {milestone.title}
          </h3>

          <p className="text-white/60 text-sm leading-relaxed mb-3">
            {milestone.description}
          </p>

          {/* Category tag + links */}
          <div className={`flex flex-wrap gap-2 items-center ${isRight ? 'md:justify-end' : ''}`}>
            <span
              className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border
                ${colors.border} ${colors.text} ${colors.bg}`}
            >
              {milestone.category}
            </span>

            {milestone.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-white/40 hover:text-cyan-400 underline underline-offset-2 transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center dot — absolutely positioned on the timeline axis */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10"
        style={{ top: '20px' }}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 bg-[#0d0d1a]
            ${colors.border}
            ${milestone.highlight ? 'w-5 h-5 shadow-lg ' + (milestone.category === 'Frontier' ? 'shadow-yellow-500/50' : 'shadow-purple-500/50') : ''}
          `}
        />
      </motion.div>

      {/* Mobile dot */}
      <div
        className={`absolute left-0 top-5 md:hidden w-3 h-3 rounded-full border-2 ${colors.border} bg-[#0d0d1a]`}
      />

      {/* Spacer for the other side (desktop only) */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}
