import { FileOutput, Plus, Bell, Sprout } from "lucide-react";
import Button from "@/src/components/Button";

export default function Header() {
  return (
    <header className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white">
            <Sprout className="w-5 h-5" />
          </div>
          <span className="font-bold text-green-800 tracking-tight text-lg">Trạm xanh</span>
        </div>
        <div className="flex gap-3">
          <button className="p-2 bg-white rounded-full shadow-sm text-gray-500 border border-gray-50">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 bg-blue-100 rounded-full border-2 border-white shadow-sm overflow-hidden" />
        </div>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2 text-left">Chiến dịch Xanh</h1>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 text-left">
        Tăng tương tác và thúc đẩy bền vững thông qua các ưu đãi được chọn lọc và sự kiện theo mùa.
      </p>

      <div className="flex gap-3">
        <Button variant="secondary" className="flex-1 py-3 rounded-2xl">
          <FileOutput className="w-4 h-4" /> Xuất file
        </Button>
        <Button variant="primary" className="flex-[1.5] py-3 rounded-2xl shadow-md">
          <Plus className="w-4 h-4" /> Chiến dịch mới
        </Button>
      </div>
    </header>
  );
}