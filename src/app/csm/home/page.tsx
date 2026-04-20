import HomeHero from "./_components/HomeHero";
import HomeStats from "./_components/HomeStats";
import HomeStations from "./_components/HomeStations";
import HomeTips from "./_components/HomeTips";
import HomeRecentActivity from "./_components/HomeRecentActivity";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 px-6 pt-6 pb-10">
      <HomeHero />
      <HomeStats />
      <HomeStations />
      <HomeTips />
      <HomeRecentActivity />
    </div>
  );
}