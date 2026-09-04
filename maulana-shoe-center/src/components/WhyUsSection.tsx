import React from 'react';
import { REASONS } from '../data/storeData';
import { Ruler, HeartHandshake, ShieldCheck, Footprints, ShoppingBag, Sparkles } from 'lucide-react';

const ICONS = [Ruler, HeartHandshake, ShieldCheck, Footprints, ShoppingBag, Sparkles];

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="bg-[#f1ecdf] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#27313b]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Section Heading */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-2 text-[#9a5645] mb-3">
              <span className="h-px w-7 bg-[#9a5645]" />
              <span className="font-mono text-xs uppercase tracking-[0.18em]">
                Why Us / 04
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.86] tracking-tight text-[#1c242c]">
              Come for the <em className="italic text-[#9a5645] font-normal">difference.</em>
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#5d6467] max-w-sm">
              There is something irreplaceable about trying on a pair of shoes in a welcoming space that understands the anatomy of a foot, the climate of Solapur, and the value of honest advice.
            </p>

            <div className="mt-8 p-4 bg-[#1c242c] text-[#f7f4ed] border-l-4 border-[#d4ad58]">
              <span className="block font-mono text-xs uppercase tracking-widest text-[#d4ad58]">
                In-Store Guarantee
              </span>
              <p className="mt-1 text-xs text-[#f7f4ed]/80">
                Walk, jump, and test every pair inside our store. If you do not feel 100% comfortable, we will keep looking with you.
              </p>
            </div>
          </div>

          {/* 6 Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#27313b]/20">
            {REASONS.map((reason, idx) => {
              const Icon = ICONS[idx] || Sparkles;
              return (
                <div
                  key={reason.number}
                  className="group py-8 sm:px-6 border-b border-[#27313b]/20 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0 transition-colors hover:bg-[#f7f4ed]/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#9a5645] bg-[#9a5645]/10 px-2 py-0.5 rounded-sm">
                      {reason.number}
                    </span>
                    <Icon size={20} className="text-[#9a5645] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="mt-5 font-display text-2xl text-[#1c242c] leading-snug">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#5d6467] leading-relaxed">
                    {reason.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
