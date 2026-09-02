import { GALLERY_IMAGES } from '../data/mortgageData';

export default function ImageShowcase() {
  return (
    <section id="showcase" className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold tracking-wider uppercase">
            REAL ESTATE &amp; FINANCING SHOWCASE
          </div>
          <h2
            id="showcase-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
          >
            Turning Homeownership Visions into Reality
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From modern residences to smooth closing milestones, our personalized loan guidance is by your side.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.src}
              id={`showcase-card-${idx + 1}`}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-xs text-amber-400 text-[11px] font-bold uppercase tracking-wider border border-slate-700/80">
                    {img.category}
                  </span>
                </div>

                <div className="absolute bottom-3 inset-x-3 text-white space-y-1">
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
