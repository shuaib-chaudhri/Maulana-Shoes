import React from 'react';
import { TESTIMONIALS, FAQS, STORE } from '../data/storeData';
import { Star, MessageSquare, Quote, HelpCircle, ChevronDown } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <section id="reviews" className="bg-[#f7f4ed] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#27313b]/10">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#9a5645] mb-3">
            <span className="h-px w-6 bg-[#9a5645]" />
            <span className="font-mono text-xs uppercase tracking-widest">
              Local Solapur Voice
            </span>
            <span className="h-px w-6 bg-[#9a5645]" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-none text-[#1c242c]">
            Trusted by Solapur <em className="italic text-[#9a5645] font-normal">Families</em>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm font-mono text-[#5d6467]">
            <div className="flex text-[#d4ad58]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="font-bold text-[#1c242c]">4.8 / 5.0</span>
            <span>(1,200+ local store reviews)</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] p-6 sm:p-7 border border-[#27313b]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote size={28} className="text-[#d4ad58]/30 absolute top-5 right-5" />
              <div>
                <div className="flex text-[#d4ad58] mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-[#27313b] leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#27313b]/10">
                <h4 className="font-display text-lg text-[#1c242c] font-bold">
                  {t.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-[#5d6467] mt-0.5">
                  <span>{t.location}</span>
                  <span className="text-[0.65rem] font-mono text-[#9a5645] bg-[#9a5645]/10 px-2 py-0.5 rounded-sm">
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="mt-20 pt-12 border-t border-[#27313b]/15 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9a5645]">
              Common Inquiries
            </span>
            <h3 className="font-display text-3xl text-[#1c242c] mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="border border-[#27313b]/15 bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-sm text-[#1c242c] hover:text-[#9a5645]"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform text-[#9a5645] ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-[#5d6467] leading-relaxed border-t border-[#27313b]/5 bg-[#f7f4ed]/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
