import React from 'react';
import { STORE } from '../data/storeData';

interface FooterProps {
  onNavigate: (id: string) => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSizeGuide }) => {
  return (
    <footer className="bg-[#111111] text-[#f7f4ed] border-t border-[#f7f4ed]/10 pt-16 pb-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Brand Col */}
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left group"
            >
              <img
                src="./images/maulana-logo.png"
                alt="Maulana Shoes"
                className="h-12 w-auto object-contain border border-[#d4ad58]/60 bg-[#111111] p-1.5 transition-transform group-hover:scale-105"
              />
              <div>
                <h3 className="font-display text-2xl text-white">{STORE.name}</h3>
                <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[#d4ad58]">
                  Begumpeth • Solapur • Est. {STORE.establishedYear}
                </p>
              </div>
            </button>

            <p className="mt-4 max-w-sm text-xs sm:text-sm text-[#f7f4ed]/60 leading-relaxed">
              {STORE.description} Your trusted neighborhood destination for handcrafted Kolhapuris, wedding mojaris, executive formals, and daily comfort footwear.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-[#f7f4ed]/70">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#d4ad58] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('collection')}
              className="hover:text-[#d4ad58] transition-colors"
            >
              Collection
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#d4ad58] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('why-us')}
              className="hover:text-[#d4ad58] transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={onOpenSizeGuide}
              className="hover:text-[#d4ad58] text-[#d4ad58] transition-colors"
            >
              Size Guide
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#d4ad58] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#f7f4ed]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[0.68rem] text-[#f7f4ed]/50">
          <span>
            © {new Date().getFullYear()} {STORE.name}. All rights reserved. Begumpeth, Solapur.
          </span>
          <span className="text-[#d4ad58]">
            Walk with confidence.
          </span>
        </div>
      </div>
    </footer>
  );
};
