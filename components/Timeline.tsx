import { type Milestone, eras } from '@/data/milestones';
import TimelineEntry from './TimelineEntry';

export default function Timeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <section className="relative max-w-5xl mx-auto px-4 py-16">
      {/* Glowing vertical line */}
      <div
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-px pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #a855f7, #06b6d4, #a855f7, #06b6d4, #a855f7)',
          boxShadow: '0 0 12px 2px rgba(168,85,247,0.35)',
        }}
      />

      {eras.map((era) => {
        const eraItems = milestones.filter((m) => m.era === era.id);
        if (eraItems.length === 0) return null;

        return (
          <div key={era.id} id={`era-${era.id}`} className="mb-8">
            {/* Era heading */}
            <div className="relative flex items-center mb-10 pl-10 md:pl-0 md:justify-center">
              <div className="bg-[#0d0d1a] border border-white/15 rounded-full px-5 py-1.5 text-sm font-mono font-semibold text-white/70 backdrop-blur-sm">
                <span className="text-white/30 mr-2">//</span>
                {era.label}
                <span className="text-white/25 ml-3 text-xs">{era.range}</span>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              {eraItems.map((m, i) => (
                <TimelineEntry key={m.id} milestone={m} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
