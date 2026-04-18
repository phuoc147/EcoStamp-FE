import { Search, ChevronDown, Building2 } from "lucide-react";

export default function StaffList() {
  const staff = [
    { name: "Julian Sylva", email: "julian.s@verdantpulse.com", role: "Chủ trạm", type: "owner" },
    { name: "Amara Oak", email: "amara.o@verdantpulse.com", role: "Nhân viên", type: "staff" },
    { name: "River Reed", email: "river.r@verdantpulse.com", role: "Nhân viên", type: "staff" },
    { name: "Linden Hayes", email: "linden.h@verdantpulse.com", role: "Nhân viên", type: "staff" },
  ];

  return (
    <div className="bg-white rounded-t-[32px] p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] text-left">
      <div className="flex items-center gap-2 mb-5">
        <Building2 className="w-5 h-5 text-green-700" />
        <h3 className="font-bold text-gray-800 text-lg">Danh sách nhân viên</h3>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input 
          type="text" 
          placeholder="Tìm kiếm nhân viên..." 
          className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
        />
      </div>
      
      <div className="space-y-5">
        {staff.map((s, idx) => (
          <div key={idx} className="flex justify-between items-center group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center font-bold text-[#1a6d2f] border border-green-100 uppercase">
                {s.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm text-gray-800 group-hover:text-green-700 transition-colors">{s.name}</p>
                <p className="text-gray-400 text-[11px] italic font-medium">{s.email}</p>
              </div>
            </div>
            <span className={`text-[9px] px-3 py-1 rounded-full font-bold tracking-wider uppercase ${
              s.type === 'owner' ? 'bg-[#ffd7c9] text-[#e07a5f]' : 'bg-gray-100 text-gray-500'
            }`}>
              {s.role}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full text-green-700 font-bold text-sm mt-8 py-2 flex justify-center items-center gap-2 hover:bg-green-50 rounded-xl transition-colors">
        Tải thêm <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}