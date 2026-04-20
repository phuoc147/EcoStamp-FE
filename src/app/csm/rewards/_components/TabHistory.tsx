import StatsOverview from './history/StatsOverview';
import ActivityTimeline from './history/ActivityTimeline';
import SectionHeader from './shared/SectionHeader';

export default function TabHistory() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <StatsOverview />
      <section>
        <SectionHeader title="Lịch sử hoạt động" />
        <ActivityTimeline />
      </section>
    </div>
  );
}