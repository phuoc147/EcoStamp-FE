import LevelBanner from './achievement/LevelBanner';
import BadgeGrid from './achievement/BadgeGrid';
import MissionList from './achievement/MissionList';
import SectionHeader from './shared/SectionHeader';

export default function TabAchievement() {
  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-left-5 duration-300">
      <LevelBanner />
      <section>
        <SectionHeader title="Huy hiệu đã đạt" />
        <BadgeGrid />
      </section>
      <section>
        <SectionHeader title="Nhiệm vụ sắp hoàn thành" hasMore={false} />
        <MissionList />
      </section>
    </div>
  );
}