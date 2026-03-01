import EraNav from '@/components/EraNav';
import HeroHeader from '@/components/HeroHeader';
import ParameterChart from '@/components/ParameterChart';
import ScrollProgress from '@/components/ScrollProgress';
import TimelineSection from '@/components/TimelineSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d1a]">
      <EraNav />
      <ScrollProgress />
      <main>
        <HeroHeader />
        <ParameterChart />
        <TimelineSection />
        <footer className="text-center py-12 text-white/15 text-xs font-mono border-t border-white/5">
          Built with Next.js · Data accurate as of March 2026
        </footer>
      </main>
    </div>
  );
}
