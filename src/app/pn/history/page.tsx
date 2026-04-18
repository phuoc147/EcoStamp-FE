import EnvironmentalImpact from "./_components/EnvironmentalImpact";
import CollectionTrend from "./_components/CollectionTrend";
import WasteClassification from "./_components/WasteClassification";
import TransactionHistory from "./_components/TransactionHistory";

export default function HistoryPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="text-left">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Lịch sử thu gom</h1>
        <p className="text-gray-400 text-xs font-medium uppercase tracking-tight">Tính đến thời điểm hiện tại</p>
      </div>

      <EnvironmentalImpact />
      <CollectionTrend />
      <WasteClassification />
      <TransactionHistory />
    </div>
  );
}