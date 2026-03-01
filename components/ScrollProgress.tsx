'use client';

import { useEffect, useState } from 'react';
import { eras } from '@/data/milestones';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [currentEra, setCurrentEra] = useState('');

  useEffect(() => {
    const handle = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Find which era is currently in view (scan reversed so last match wins)
      let found = '';
      for (const era of eras) {
        const el = document.getElementById(`era-${era.id}`);
        if (el && el.getBoundingClientRect().top <= 100) {
          found = era.label;
        }
      }
      setCurrentEra(found || eras[0].label);
    };

    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <div className="fixed top-14 left-0 right-0 z-40 h-[2px] bg-white/5">
      {/* Progress bar */}
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(to right, #a855f7, #06b6d4)',
          boxShadow: '0 0 8px 2px rgba(168,85,247,0.45)',
          transition: 'width 80ms linear',
        }}
      />

      {/* Era label floats above the bar end */}
      {currentEra && (
        <div
          className="absolute -top-6 text-[10px] font-mono text-white/35 pointer-events-none
            bg-[#0d0d1a]/80 px-2 py-0.5 rounded-sm backdrop-blur-sm"
          style={{
            left: `${Math.min(progress, 90)}%`,
            transform: 'translateX(-50%)',
            transition: 'left 80ms linear',
          }}
        >
          {currentEra}
        </div>
      )}
    </div>
  );
}
