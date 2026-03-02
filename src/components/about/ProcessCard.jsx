export default function ProcessCard({ number, icon, title, detail }) {
  return (
    <div className="group relative bg-[#F2F0ED] p-10 pt-14 rounded-3xl border border-stone-200/60 transition-all duration-500 hover:bg-[#EBE9E6] hover:border-rose-300/40">
      
      {/* 1. Muted Number Badge - Dusty Rose instead of Bright Pink */}
      <div className="absolute top-0 left-0 bg-[#D4A39E] text-[#FDFCFB] text-[10px] font-bold px-6 py-2 rounded-tl-3xl rounded-br-2xl tracking-[0.2em]">
        {number}
      </div>

      {/* 2. Centered Icon - Muted Graphite color */}
      <div className="flex justify-center mb-8">
        <div className="text-stone-500/80 transition-all duration-500 group-hover:text-[#D4A39E] group-hover:scale-105">
          {icon}
        </div>
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-lg font-serif font-medium text-stone-800 tracking-wide">
          {title}
        </h3>
        <p className="text-stone-600/90 text-sm leading-relaxed font-light px-2">
          {detail}
        </p>
      </div>

      {/* 3. Minimal Flat Accent */}
      <div className="mt-10 flex justify-center">
        <div className="h-[1px] w-6 bg-stone-300 transition-all duration-700 group-hover:w-20 group-hover:bg-[#D4A39E]/50" />
      </div>
    </div>
  );
}