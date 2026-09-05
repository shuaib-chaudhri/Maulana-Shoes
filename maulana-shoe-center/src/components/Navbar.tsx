import React, { useState, useEffect } from 'react';
import { STORE } from '../data/storeData';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Ruler } from 'lucide-react';

interface NavbarProps {
  onOpenSizeGuide: () => void;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSizeGuide, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#f7f4ed]/95 backdrop-blur-md shadow-sm border-b border-[#27313b]/10 py-3'
            : 'bg-[#f7f4ed]/80 backdrop-blur-sm border-b border-[#27313b]/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <img
              src="./images/maulana-logo.png"
              alt="Maulana Shoe Center"
              className="h-10 sm:h-12 w-auto object-contain border border-[#d4ad58]/60 bg-[#111111] px-2 py-1 transition-transform group-hover:scale-105 shadow-sm"
            />
            <div className="hidden sm:block">
              <span className="block font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1c242c]">
                {STORE.name}
              </span>
              <span className="block text-[0.6rem] font-mono tracking-widest uppercase text-[#9a5645]">
                Begumpeth • Solapur • Est. {STORE.establishedYear}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Collection', id: 'collection' },
              { label: 'About', id: 'about' },
              { label: 'Why Us', id: 'why-us' },
              { label: 'Reviews', id: 'reviews' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="font-mono text-xs uppercase tracking-[0.14em] text-[#5d6467] hover:text-[#9a5645] transition-colors py-1"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={onOpenSizeGuide}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-[#b68e39] hover:text-[#9a5645] transition-colors py-1 border-b border-[#b68e39]/30 pb-0.5"
            >
              <Ruler size={13} />
              Size Guide
            </button>
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={STORE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#27313b]/20 hover:border-[#25D366] hover:text-[#25D366] text-[#27313b] px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <a
              href={STORE.phoneLink}
              className="inline-flex items-center gap-2 bg-[#27313b] hover:bg-[#9a5645] text-[#f7f4ed] px-4 py-2 text-xs font-mono tracking-wider uppercase transition-colors shadow-sm rounded-sm"
            >
              <Phone size={14} />
              <span>Call Store</span>
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={STORE.phoneLink}
              className="p-2 bg-[#27313b] text-[#f7f4ed] rounded-sm hover:bg-[#9a5645] transition-colors"
              aria-label="Call Store"
            >
              <Phone size={17} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#27313b]/20 text-[#27313b] hover:bg-[#27313b]/5 transition-colors rounded-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#1c242c] text-[#f7f4ed] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#f7f4ed]/15">
                <div className="flex items-center gap-3">
                  <img
                    src="./images/maulana-logo.png"
                    alt="Maulana Shoes"
                    className="h-9 w-auto bg-[#111111] p-1 border border-[#d4ad58]/50"
                  />
                  <div>
                    <h3 className="font-display text-lg text-[#f7f4ed]">{STORE.name}</h3>
                    <p className="text-[0.58rem] font-mono uppercase tracking-widest text-[#d4ad58]">
                      Begumpeth, Solapur
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#f7f4ed]/70 hover:text-[#f7f4ed]"
                  aria-label="Close Menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Status Badge */}
              <div className="mt-4 flex items-center gap-2 py-2 px-3 bg-[#f7f4ed]/5 border border-[#d4ad58]/30 text-xs font-mono text-[#d4ad58]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open Today: 10:00 AM – 9:30 PM</span>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Explore Footwear Collection', id: 'collection' },
                  { label: 'About Our Store', id: 'about' },
                  { label: 'Why Choose Us', id: 'why-us' },
                  { label: 'Customer Reviews', id: 'reviews' },
                  { label: 'Store Location & Hours', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left py-2.5 font-mono text-xs tracking-widest uppercase text-[#f7f4ed]/90 hover:text-[#d4ad58] border-b border-[#f7f4ed]/10 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="text-[#d4ad58]" />
                  </button>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSizeGuide();
                  }}
                  className="text-left py-2.5 font-mono text-xs tracking-widest uppercase text-[#d4ad58] hover:text-[#f7f4ed] border-b border-[#f7f4ed]/10 transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Ruler size={14} /> Shoe Size Converter
                  </span>
                  <ArrowUpRight size={14} />
                </button>
              </nav>
            </div>

            {/* Bottom Contact Actions */}
            <div className="pt-5 border-t border-[#f7f4ed]/15 space-y-2.5">
              <a
                href={STORE.phoneLink}
                className="w-full flex items-center justify-center gap-2 bg-[#d4ad58] text-[#1c242c] py-2.5 text-xs font-mono tracking-wider uppercase font-semibold hover:bg-[#e6c374] transition-colors rounded-sm"
              >
                <Phone size={15} />
                Call: {STORE.phone}
              </a>

              <a
                href={STORE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] py-2.5 text-xs font-mono tracking-wider uppercase hover:bg-[#25D366]/10 transition-colors rounded-sm"
              >
                <MessageCircle size={15} />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
