import { Check, X, ClipboardList } from "lucide-react";
import Button from "@/src/components/Button";

export default function PendingRequests() {
  const requests = [
    { id: 1, name: "Elena Birch", time: "2 giờ trước" },
    { id: 2, name: "Marcus Thorne", time: "5 giờ trước" },
  ];

  return (
    <div className="bg-[#f1f8f0] p-4 rounded-2xl mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold flex items-center gap-2 text-gray-800">
          <ClipboardList className="w-5 h-5 text-green-700" />
          Đang chờ phê duyệt
        </h3>
        <span className="bg-[#60a044] text-white px-2 py-0.5 rounded-full text-[10px] font-bold">3 NEW</span>
      </div>
      <div className="space-y-3 text-left">
        {requests.map((req) => (
          <div key={req.id} className="bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full border border-gray-100" />
              <div>
                <p className="font-bold text-sm text-gray-800">{req.name}</p>
                <p className="text-gray-400 text-[11px]">{req.time}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1" variant="primary">
                <Check className="w-4 h-4" /> Chấp nhận
              </Button>
              <Button className="flex-1" variant="secondary">
                <X className="w-4 h-4" /> Từ chối
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}