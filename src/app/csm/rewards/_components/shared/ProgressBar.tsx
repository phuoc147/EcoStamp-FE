export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="bg-[#f5fae4] h-1.5 w-full rounded-full overflow-hidden">
      <div 
        className="bg-[#00875a] h-full transition-all duration-700 ease-out" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}