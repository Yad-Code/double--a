import { Star, Quote } from "lucide-react";

export default function ReviewCard({ 
  name = "Sarah M.", 
  category = "Nursery Decor", 
  text = "The felt flowers I purchased for my daughter's nursery are perfect. The quality is exceptional and the colors are so vibrant. Highly recommend!" 
}) {
  return (
    <div className="group relative bg-white border border-rose-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-rose-100/40 transition-all duration-500 overflow-hidden max-w-md mx-auto">
      
      {/* Decorative Large Quote Mark Background */}
      <Quote 
        className="absolute -top-4 -right-2 w-24 h-24 text-rose-50 -rotate-12 group-hover:text-rose-100 group-hover:rotate-0 transition-all duration-700" 
        strokeWidth={1}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-rose-400 text-rose-400" />
          ))}
        </div>

        {/* Review Text Body */}
        <blockquote className="flex-1">
          <p className="text-slate-700 text-lg font-serif italic leading-relaxed">
            "{text}"
          </p>
        </blockquote>

        {/* Dynamic Divider Line */}
        <div className="w-12 h-px bg-rose-200 my-6 transition-all duration-500 group-hover:w-full" />

        {/* Author Info Section */}
        <div className="flex items-center gap-4">
          {/* Stylized Initial Avatar */}
          <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 font-bold shadow-inner flex-shrink-0">
            {name.charAt(0)}
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 text-sm tracking-tight leading-none">{name}</h4>
            <p className="text-rose-400 text-[10px] uppercase tracking-[0.2em] font-bold mt-1.5">
              {category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}