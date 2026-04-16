import HomeHero from "@/src/app/(consumer)/home/_components/HomeHero";
import HomeRecentActivity from "@/src/app/(consumer)/home/_components/HomeRecentActivity";
import HomeStations from "@/src/app/(consumer)/home/_components/HomeStations";
import HomeStats from "@/src/app/(consumer)/home/_components/HomeStats";
import HomeTips from "@/src/app/(consumer)/home/_components/HomeTips";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 px-6 pt-24 pb-28">
      <HomeHero />
      <HomeStats />
      <HomeStations />
      <HomeTips />
      <HomeRecentActivity />
    </div>
  );
}
