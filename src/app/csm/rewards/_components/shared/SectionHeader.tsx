export default function SectionHeader({ title, hasMore = true }: { title: string, hasMore?: boolean }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h4 className="font-black text-[#1c3f25] text-base">{title}</h4>
      {hasMore && <button className="text-[11px] font-black text-[#00875a] uppercase">Xem tất cả</button>}
    </div>
  );
}