'use client';

import { motion } from 'framer-motion';

export default function HeroHeader() {
  return (
    <header className="relative overflow-hidden py-24 px-4 text-center">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-8 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70 mb-4">
          1943 → 2025
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          History of{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #a855f7 100%)',
            }}
          >
            Large Language Models
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          From McCulloch-Pitts neurons to frontier transformers — every
          breakthrough that shaped modern AI.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 mx-auto w-24 h-0.5 origin-center"
          style={{
            background: 'linear-gradient(to right, #a855f7, #06b6d4)',
            boxShadow: '0 0 8px 2px rgba(168,85,247,0.5)',
          }}
        />
      </motion.div>
    </header>
  );
}
