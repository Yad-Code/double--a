export default function AboutCard({ title, detail, icon }) {
  return (
    <div className="group p-8 bg-white border border-rose-50 rounded-[2.5rem] transition-all duration-500 hover:shadow-xl hover:shadow-rose-100/50 hover:-translate-y-2">
      <div className="flex flex-col items-center text-center space-y-5">
        
        {/* Icon Container */}
        <div className="relative">
          {/* Decorative background glow for icon */}
          <div className="absolute inset-0 bg-rose-100 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-50" />
          
          <button className="relative w-16 h-16 flex items-center justify-center bg-white border border-rose-100 rounded-2xl text-rose-500 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
            {/* Increase the size of the icon passed as a prop */}
            {icon}
          </button>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
            {title}
          </h2>
          <div className="w-8 h-0.5 bg-rose-200 mx-auto rounded-full group-hover:w-16 transition-all duration-500" />
          <p className="text-slate-500 text-sm leading-relaxed px-2">
            {detail}
          </p>
        </div>
        
      </div>
    </div>
  );
}