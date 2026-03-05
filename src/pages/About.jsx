import AboutSection from "../components/about/AboutSection";
import ProcessSection from "../components/about/ProcessSection";

export default function About() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Header - Matte Stone Background */}
      <header className="relative pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-bold">
              Est. 2024
            </h4>
            <h1 className="text-6xl md:text-8xl font-serif text-stone-800 tracking-tight leading-none">
              Our <span className="italic text-[#D4A39E]">Story</span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="h-px w-12 bg-stone-300/60" />
            <p className="text-xl text-stone-500 italic font-serif max-w-2xl leading-relaxed">
              "Handcrafted with care, designed to last forever."
            </p>
          </div>
        </div>
      </header>

      {/* About Section - Muted Clay Background */}
      <section className="bg-[#F3F1EE] py-20">
        <AboutSection />
      </section>

      {/* Process Section - Antique White Background */}
      <ProcessSection />

      {/* Final CTA - Dark Charcoal for visual weight (restful) */}
      <section className="py-32 px-6 text-center bg-[#FAF9F6]">
        <div className="max-w-xl mx-auto space-y-10">
          <h2 className="text-4xl font-serif text-stone-800 italic">
            Let's create something beautiful
          </h2>
          <a href="/contact">
            <button className="px-12 py-5 bg-stone-800 text-stone-100 rounded-full font-bold tracking-[0.2em] text-[10px] hover:bg-[#D4A39E] transition-all duration-500 shadow-md uppercase">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
