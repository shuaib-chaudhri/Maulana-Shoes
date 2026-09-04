import React, { useState } from 'react';
import { STORE } from '../data/storeData';
import { MapPin, Phone, MessageCircle, Compass, Clock, Copy, Check, ExternalLink } from 'lucide-react';

export const VisitSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="bg-[#1c242c] text-[#f7f4ed] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          {/* Left Details */}
          <div>
            <div className="flex items-center gap-2 text-[#d4ad58] mb-3">
              <span className="h-px w-8 bg-[#d4ad58]" />
              <span className="font-mono text-xs uppercase tracking-[0.18em]">
                Come by / 06 • Begumpeth Store
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.85] tracking-tight text-white">
              Let's find <em className="italic text-[#d4ad58] font-normal">your pair.</em>
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#f7f4ed]/75 max-w-lg">
              Visit our Begumpeth showroom in Solapur. Our doors are open 7 days a week for a relaxed try-on, sizing guidance, and genuine hospitality.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={STORE.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#d4ad58] hover:bg-[#e6c374] text-[#1c242c] font-mono text-xs uppercase tracking-wider font-semibold px-5 py-3.5 shadow-md transition-colors rounded-sm"
              >
                <Compass size={16} />
                Get Driving Directions
                <ExternalLink size={13} />
              </a>

              <a
                href={STORE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-mono text-xs uppercase tracking-wider px-5 py-3.5 transition-colors rounded-sm"
              >
                <MessageCircle size={16} />
                WhatsApp Inquiry
              </a>

              <a
                href={STORE.phoneLink}
                className="inline-flex items-center gap-2 border border-[#f7f4ed]/25 text-[#f7f4ed] hover:border-[#d4ad58] hover:text-[#d4ad58] font-mono text-xs uppercase tracking-wider px-5 py-3.5 transition-colors rounded-sm"
              >
                <Phone size={15} />
                Call Store
              </a>
            </div>

            {/* Contact Details Grid */}
            <div className="mt-12 pt-8 border-t border-[#f7f4ed]/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="bg-[#242d36] p-5 border border-[#f7f4ed]/10">
                <div className="flex items-center justify-between text-[#d4ad58] mb-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest flex items-center gap-1.5">
                    <MapPin size={14} /> Store Address
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="text-[0.65rem] font-mono uppercase text-[#d4ad58] hover:underline flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="font-display text-lg text-white">
                  {STORE.location}
                </p>
                <p className="text-xs text-[#f7f4ed]/60 mt-1">
                  Near Begumpeth Main Market, Solapur
                </p>
              </div>

              {/* Hours Card */}
              <div className="bg-[#242d36] p-5 border border-[#f7f4ed]/10">
                <div className="flex items-center gap-1.5 text-[#d4ad58] mb-2 font-mono text-[0.65rem] uppercase tracking-widest">
                  <Clock size={14} /> Store Hours
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                    Open Daily
                  </span>
                </div>
                <p className="font-display text-lg text-white">
                  10:00 AM – 9:30 PM
                </p>
                <p className="text-xs text-[#f7f4ed]/60 mt-1">
                  Monday to Sunday (All 7 Days)
                </p>
              </div>

              {/* Phone */}
              <div className="bg-[#242d36] p-5 border border-[#f7f4ed]/10">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#d4ad58] flex items-center gap-1.5 mb-2">
                  <Phone size={14} /> Telephone
                </span>
                <a
                  href={STORE.phoneLink}
                  className="font-display text-lg text-white hover:text-[#d4ad58] transition-colors block"
                >
                  {STORE.phone}
                </a>
                <p className="text-xs text-[#f7f4ed]/60 mt-1">
                  Direct line for stock availability
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-[#242d36] p-5 border border-[#f7f4ed]/10">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#d4ad58] flex items-center gap-1.5 mb-2">
                  <MessageCircle size={14} /> WhatsApp Support
                </span>
                <a
                  href={STORE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg text-white hover:text-[#25D366] transition-colors block"
                >
                  {STORE.whatsapp}
                </a>
                <p className="text-xs text-[#f7f4ed]/60 mt-1">
                  Send photo of shoe for price & size
                </p>
              </div>
            </div>
          </div>

          {/* Right Location Map & Visual Card */}
          <div className="space-y-6">
            {/* Storefront Picture Card */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#242d36] border border-[#f7f4ed]/15 shadow-xl">
              <img
                src="/images/collection-editorial.jpg"
                alt="Maulana Shoe Center footwear collection"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c242c]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[0.62rem] uppercase tracking-widest text-[#d4ad58]">
                  Solapur Footwear Landmark
                </span>
                <h4 className="font-display text-xl text-white mt-0.5">
                  Maulana Shoe Center
                </h4>
                <p className="text-xs text-[#f7f4ed]/70">
                  Begumpeth, Solapur, Maharashtra 413001
                </p>
              </div>
            </div>

            {/* Google Maps Interactive Card */}
            <div className="bg-[#242d36] p-4 border border-[#f7f4ed]/15">
              <div className="flex items-center justify-between pb-3 border-b border-[#f7f4ed]/10 mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#d4ad58] flex items-center gap-1.5">
                  <MapPin size={14} /> Solapur Map Pin
                </span>
                <a
                  href={STORE.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#d4ad58] hover:underline inline-flex items-center gap-1"
                >
                  Full Map <ExternalLink size={12} />
                </a>
              </div>

              {/* Map Embed Iframe */}
              <div className="w-full h-56 overflow-hidden bg-black/40 border border-[#f7f4ed]/10">
                <iframe
                  title="Maulana Shoe Center Begumpeth Solapur Map"
                  src="https://maps.google.com/maps?q=Begumpeth+Solapur+Maharashtra+413001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
