import React from 'react';
import { STORE } from '../data/storeData';
import { MapPin, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#f7f4ed] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#27313b]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#9a5645] mb-4">
              <span className="h-px w-8 bg-[#9a5645]" />
              <span className="font-mono text-xs uppercase tracking-[0.16em]">
                The Heritage / Since {STORE.establishedYear}
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.88] tracking-tight text-[#1c242c]">
              Good shoes make <em className="italic text-[#9a5645] font-normal">good days.</em>
            </h2>

            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[#9a5645] font-semibold">
              {STORE.yearsOfTrust} Years of Dedication & Quality in Solapur
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#1c242c] font-medium">
              A neighborhood shoe sanctuary with an uncompromising eye for the details that make every pair feel like it was custom-made for you.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5d6467]">
              Come in for the craftsmanship, stay for the personalized fit. Our collection is curated specifically around how people in Solapur actually live and move — brisk morning walks, festive Eid and Diwali celebrations, daily business commutes across Saat Rasta, family weddings, and leisurely evening strolls.
            </p>

            {/* 3 Value Pillars */}
            <div className="mt-8 space-y-3 pt-6 border-t border-[#27313b]/15">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#9a5645] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1c242c]">Locally Hand-Selected Leather</h4>
                  <p className="text-xs text-[#5d6467]">Authentic Kolhapuris and oxblood formals hand-burnished for lasting wear.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#9a5645] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1c242c]">Proper Sit-Down Try-On Experience</h4>
                  <p className="text-xs text-[#5d6467]">No rush and no pressure. Take your time to walk and feel the cushion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#9a5645] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1c242c]">Fair, Honest Local Pricing</h4>
                  <p className="text-xs text-[#5d6467]">Premium craftsmanship priced fairly for our Solapur community since 1992.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative">
            <div className="relative aspect-[4/3.8] overflow-hidden bg-[#d0c5b2] shadow-xl border border-[#27313b]/10">
              <img
                src="./images/store-detail.jpg"
                alt="Shopkeeper arranging leather footwear at Maulana Shoe Center, Solapur"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c242c]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-xs uppercase tracking-widest text-[#d4ad58]">
                  Begumpeth Store Experience
                </span>
                <p className="font-display text-2xl mt-1 text-white">
                  Warm hospitality, generational trust.
                </p>
                <p className="text-xs text-[#f7f4ed]/80 mt-1">
                  Located near the Begumpeth commercial hub in Solapur.
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#1c242c] text-[#f7f4ed] p-4 border border-[#d4ad58]/50 shadow-2xl max-w-[240px]">
              <div className="flex items-center gap-2 text-[#d4ad58] mb-1">
                <HeartHandshake size={18} />
                <span className="font-mono text-[0.62rem] uppercase tracking-wider">
                  Community Promise
                </span>
              </div>
              <p className="font-display text-lg text-white leading-tight">
                Over 34 years of fitting Solapur with pride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
