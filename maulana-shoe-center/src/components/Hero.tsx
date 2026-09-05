import React from 'react';
import { STORE } from '../data/storeData';
import { MoveRight, Store, ArrowDownRight, ShieldCheck, Footprints, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
  onOpenSizeGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenSizeGuide }) => {
  return (
    <section id="home" className="relative overflow-hidden border-b border-[#27313b]/10 pt-[74px] sm:pt-[82px]">
      <div className="max-w-7xl mx-auto grid min-h-[min(720px,calc(100dvh-70px))] grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
        {/* Left Editorial Content */}
        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:px-12 lg:py-20 z-10">
          {/* Heritage Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ad58]/15 border border-[#d4ad58]/40 w-fit mb-6 text-[#9a5645]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9a5645]" />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] font-semibold">
              Begumpeth, Solapur • Est. {STORE.establishedYear}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-[clamp(3.4rem,7.5vw,7.4rem)] leading-[0.84] tracking-[-0.045em] text-[#1c242c]">
            Step Into <em className="italic text-[#9a5645] font-normal">Style.</em>
            <span className="mt-4 block font-sans text-[clamp(1.9rem,4vw,3.8rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-[#27313b]">
              Walk With Confidence.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-[0.95rem] sm:text-base leading-relaxed text-[#5d6467]">
            {STORE.description} From traditional Kolhapuri craftsmanship to sharp executive formals and everyday cushioned runners, find your perfect pair in Solapur.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => onNavigate('collection')}
              className="group inline-flex items-center gap-3 bg-[#1c242c] hover:bg-[#9a5645] text-[#f7f4ed] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.14em] transition-all shadow-md rounded-sm"
            >
              Explore Collection
              <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 border border-[#27313b]/30 hover:border-[#9a5645] hover:text-[#9a5645] text-[#1c242c] px-5 py-3.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors rounded-sm bg-white/40"
            >
              <Store size={15} />
              Visit Store
            </button>

            <button
              onClick={onOpenSizeGuide}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[#b68e39] hover:text-[#9a5645] underline underline-offset-4 py-2 px-1 transition-colors"
            >
              Fit Guide
            </button>
          </div>

          {/* Trust Metric Badges */}
          <div className="mt-12 pt-6 border-t border-[#27313b]/15 grid grid-cols-3 gap-3">
            <div>
              <span className="block font-display text-2xl sm:text-3xl text-[#1c242c] font-bold leading-none">
                {STORE.yearsOfTrust}+
              </span>
              <span className="mt-1 block text-[0.62rem] font-mono uppercase tracking-wider text-[#5d6467]">
                Years in Solapur
              </span>
            </div>

            <div>
              <span className="block font-display text-2xl sm:text-3xl text-[#9a5645] font-bold leading-none">
                10+
              </span>
              <span className="mt-1 block text-[0.62rem] font-mono uppercase tracking-wider text-[#5d6467]">
                Curated Categories
              </span>
            </div>

            <div>
              <span className="block font-display text-2xl sm:text-3xl text-[#d4ad58] font-bold leading-none">
                4.8★
              </span>
              <span className="mt-1 block text-[0.62rem] font-mono uppercase tracking-wider text-[#5d6467]">
                1,200+ Walkers
              </span>
            </div>
          </div>
        </div>

        {/* Right Hero Showcase Image */}
        <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-full overflow-hidden bg-[#d5c6ad]">
          <img
            src="./images/hero-footwear.jpg"
            alt="Handcrafted leather footwear arranged on a stone pedestal"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
            fetchPriority="high"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c242c]/75 via-transparent to-black/20" />

          {/* Floating Tag */}
          <div className="absolute top-5 left-5 bg-[#1c242c]/85 backdrop-blur-sm border border-[#d4ad58]/40 px-3.5 py-1.5 text-[#f7f4ed] shadow-lg">
            <div className="flex items-center gap-2">
              <Sparkles size={13} className="text-[#d4ad58]" />
              <span className="font-mono text-[0.62rem] uppercase tracking-widest text-[#d4ad58]">
                New Season Edit • Begumpeth
              </span>
            </div>
          </div>

          {/* Vertical Watermark */}
          <div className="absolute right-5 top-8 hidden sm:block [writing-mode:vertical-rl] font-mono text-[0.58rem] uppercase tracking-[0.22em] text-[#f7f4ed]/70">
            Maulana Shoe Center / Begumpeth
          </div>

          {/* Bottom Card Preview */}
          <div className="absolute bottom-6 left-5 right-5 sm:right-auto sm:max-w-xs bg-[#1c242c]/90 backdrop-blur-md border border-[#f7f4ed]/15 p-4 text-[#f7f4ed] shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#d4ad58]">
                In-Store Trial Ready
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f7f4ed]/10 text-[#d4ad58]">
                <ArrowDownRight size={14} />
              </span>
            </div>
            <p className="mt-1 font-display text-lg text-white">
              Oxblood Leather & Sand Suede
            </p>
            <p className="mt-1 text-xs text-[#f7f4ed]/70">
              Personalized try-on available every day in Begumpeth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
