import HomeHero from "./_components/HomeHero";
import HomeRecentActivity from "./_components/HomeRecentActivity";
import HomeStations from "./_components/HomeStations";
import HomeStats from "./_components/HomeStats";
import HomeTips from "./_components/HomeTips";


export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 px-6 pt-24 pb-28">
      <HomeHero />
      <HomeStats />
      <HomeStations />
      <HomeTips />
      <HomeRecentActivity/>
    </div>
  );
}
