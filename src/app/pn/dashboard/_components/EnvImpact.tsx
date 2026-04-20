import { Cloud, TreePine, Recycle } from 'lucide-react';

export default function EnvImpact() {
  return (
    <section className="bg-[#2a833b] text-white rounded-4xl p-6 mb-5 relative overflow-hidden">
      <Recycle className="absolute -right-5 -bottom-5 opacity-10" size={160} />
      <h2 className="font-bold text-lg mb-4">Tác động Môi trường<br/>trong tháng</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-2.5 rounded-full"><Cloud size={18} /></div>
          <div>
            <div className="text-2xl font-bold">2.4T</div>
            <div className="text-[11px] opacity-80">Phát thải CO2 giảm</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-2.5 rounded-full"><TreePine size={18} /></div>
          <div>
            <div className="text-2xl font-bold">142</div>
            <div className="text-[11px] opacity-80">Cây xanh được cứu</div>
          </div>
        </div>
      </div>
    </section>
  );
}