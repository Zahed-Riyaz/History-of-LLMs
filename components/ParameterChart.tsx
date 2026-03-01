'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type DataPoint = {
  year: number;
  model: string;
  params: number; // billions
  estimated?: boolean;
  color: string;
};

const data: DataPoint[] = [
  { year: 2018, model: 'BERT', params: 0.34, color: '#a855f7' },
  { year: 2018, model: 'GPT-1', params: 0.117, color: '#a855f7' },
  { year: 2019, model: 'GPT-2', params: 1.5, color: '#a855f7' },
  { year: 2020, model: 'GPT-3', params: 175, color: '#06b6d4' },
  { year: 2021, model: 'Gopher', params: 280, color: '#06b6d4' },
  { year: 2022, model: 'Chinchilla', params: 70, color: '#06b6d4' },
  { year: 2022, model: 'PaLM', params: 540, color: '#06b6d4' },
  { year: 2023, model: 'LLaMA', params: 65, color: '#eab308' },
  { year: 2023, model: 'GPT-4', params: 1800, color: '#eab308', estimated: true },
  { year: 2024, model: 'DeepSeek-V2', params: 236, color: '#eab308' },
  { year: 2024, model: 'Llama 3', params: 405, color: '#eab308' },
  { year: 2025, model: 'DeepSeek-V3', params: 671, color: '#f97316' },
];

// Chart constants
const W = 700, H = 340;
const ML = 68, MR = 30, MT = 20, MB = 50;
const PLOT_W = W - ML - MR;
const PLOT_H = H - MT - MB;
const YEAR_MIN = 2018, YEAR_MAX = 2025;
const LOG_MIN = -1, LOG_MAX = 3.5, LOG_SPAN = LOG_MAX - LOG_MIN;

function xScale(year: number) {
  return ML + ((year - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * PLOT_W;
}

function yScale(params: number) {
  const log = Math.log10(Math.max(params, 0.01));
  const clamped = Math.max(LOG_MIN, Math.min(LOG_MAX, log));
  return MT + PLOT_H - ((clamped - LOG_MIN) / LOG_SPAN) * PLOT_H;
}

function dotR(params: number) {
  return 4 + Math.max(0, (Math.log10(params) + 1)) * 2;
}

function fmtParams(params: number) {
  if (params >= 1000) return `${(params / 1000).toFixed(1)}T`;
  if (params >= 1) return `${params}B`;
  return `${Math.round(params * 1000)}M`;
}

const yGridlines = [
  { log: -1, label: '0.1B' },
  { log: 0, label: '1B' },
  { log: 1, label: '10B' },
  { log: 2, label: '100B' },
  { log: 3, label: '1T' },
];

const LEGEND = [
  { color: '#a855f7', label: '2018–2019' },
  { color: '#06b6d4', label: '2020–2022' },
  { color: '#eab308', label: '2023–2024' },
  { color: '#f97316', label: '2025' },
];

export default function ParameterChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="max-w-5xl mx-auto px-4 pb-12">
      <div className="text-center mb-6">
        <h2 className="text-white/70 font-mono text-sm font-semibold tracking-widest uppercase mb-1">
          <span className="text-purple-400 mr-2">▲</span>Parameter Scale Over Time
        </h2>
        <p className="text-white/30 text-xs font-mono">
          Y-axis logarithmic · * = estimated · hover dots for details
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/3 p-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto min-w-[320px]"
          style={{ fontFamily: 'var(--font-space-mono, monospace)' }}
        >
          <defs>
            <radialGradient id="bgGlow" cx="50%" cy="85%" r="55%">
              <stop offset="0%" stopColor="rgba(168,85,247,0.06)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width={W} height={H} fill="url(#bgGlow)" />

          {/* Y gridlines + labels */}
          {yGridlines.map(({ log, label }) => {
            const y = MT + PLOT_H - ((log - LOG_MIN) / LOG_SPAN) * PLOT_H;
            return (
              <g key={log}>
                <line
                  x1={ML} y1={y} x2={ML + PLOT_W} y2={y}
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x={ML - 8} y={y + 4}
                  textAnchor="end"
                  fontSize="10"
                  fill="rgba(255,255,255,0.3)"
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* X gridlines + labels */}
          {[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => {
            const x = xScale(year);
            return (
              <g key={year}>
                <line
                  x1={x} y1={MT} x2={x} y2={MT + PLOT_H}
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
                <text
                  x={x} y={MT + PLOT_H + 20}
                  textAnchor="middle"
                  fontSize="10"
                  fill="rgba(255,255,255,0.3)"
                >
                  {year}
                </text>
              </g>
            );
          })}

          {/* Axis lines */}
          <line
            x1={ML} y1={MT} x2={ML} y2={MT + PLOT_H}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <line
            x1={ML} y1={MT + PLOT_H} x2={ML + PLOT_W} y2={MT + PLOT_H}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />

          {/* Dots */}
          {data.map((d, i) => {
            const x = xScale(d.year);
            const y = yScale(d.params);
            const r = dotR(d.params);
            const isHov = hovered === i;
            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.07, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
              >
                {isHov && (
                  <circle
                    cx={x} cy={y} r={r + 7}
                    fill="none"
                    stroke={d.color}
                    strokeWidth="1"
                    opacity="0.35"
                  />
                )}
                <circle
                  cx={x} cy={y}
                  r={isHov ? r + 2 : r}
                  fill={d.color}
                  opacity={isHov ? 1 : 0.75}
                  style={{
                    filter: isHov ? `drop-shadow(0 0 8px ${d.color})` : undefined,
                    transition: 'r 0.15s, opacity 0.15s',
                  }}
                />
                {d.estimated && (
                  <text
                    x={x + r + 2} y={y - r + 2}
                    fontSize="8"
                    fill={d.color}
                    opacity="0.7"
                  >
                    *
                  </text>
                )}
              </motion.g>
            );
          })}

          {/* Hover tooltip */}
          {hovered !== null && (() => {
            const d = data[hovered];
            const x = xScale(d.year);
            const y = yScale(d.params);
            const tipW = 130, tipH = 40;
            const tx = Math.max(ML, Math.min(x - tipW / 2, ML + PLOT_W - tipW));
            const ty = y - tipH - 14 < MT ? y + 12 : y - tipH - 14;
            return (
              <g>
                <rect
                  x={tx} y={ty}
                  width={tipW} height={tipH}
                  rx="5"
                  fill="#12122a"
                  stroke={d.color}
                  strokeWidth="1"
                  opacity="0.97"
                />
                <text
                  x={tx + tipW / 2} y={ty + 14}
                  textAnchor="middle"
                  fontSize="9"
                  fill="rgba(255,255,255,0.9)"
                  fontWeight="bold"
                >
                  {d.model}
                </text>
                <text
                  x={tx + tipW / 2} y={ty + 29}
                  textAnchor="middle"
                  fontSize="9"
                  fill={d.color}
                >
                  {fmtParams(d.params)} params{d.estimated ? ' (est.)' : ''}
                </text>
              </g>
            );
          })()}
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-1">
          {LEGEND.map(({ color, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
              <span className="text-[10px] font-mono text-white/30">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
