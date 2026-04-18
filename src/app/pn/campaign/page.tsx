import CampaignHeader from "./_components/CampaignHeader";
import CouponList from "./_components/CouponList";
import EventSection from "./_components/EventSection";

export default function CampaignPage() {
  return (
    <div className="space-y-2">
      <CampaignHeader />
      <CouponList />
      <EventSection />
    </div>
  );
}