import React, { useState, useMemo } from 'react';
import { CATEGORIES, FOOTWEAR_STYLES, FootwearStyle, STORE } from '../data/storeData';
import { Search, ArrowUpRight, MessageCircle, Eye, Sparkles, Footprints, Info, Store } from 'lucide-react';

interface CollectionSectionProps {
  onSelectStyle: (style: FootwearStyle) => void;
  onNavigateContact: () => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  onSelectStyle,
  onNavigateContact,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter styles by category and search
  const filteredStyles = useMemo(() => {
    return FOOTWEAR_STYLES.filter((style) => {
      const matchesCategory =
        selectedCategory === 'all' || style.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppQuickInquiry = (e: React.MouseEvent, style: FootwearStyle) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello Maulana Shoe Center, I am looking for "${style.name}" (${style.type}). What designs and options do you have available at your Begumpeth store right now?`
    );
    window.open(`https://wa.me/${STORE.whatsappRaw}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="collection" className="bg-[#1c242c] text-[#f7f4ed] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#f7f4ed]/15">
          <div>
            <div className="flex items-center gap-2 text-[#d4ad58] mb-3">
              <Sparkles size={15} />
              <span className="font-mono text-xs uppercase tracking-[0.18em]">
                Footwear Varieties / 02 • Solapur Store
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.85] tracking-tight text-[#f7f4ed]">
              Styles & categories <em className="italic text-[#d4ad58] font-normal">we carry.</em>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#f7f4ed]/75">
            These models showcase the styles, silhouettes, and categories available at our store. When you visit Begumpeth, you will discover a vast collection of current designs, colors, and all standard sizes.
          </p>
        </div>

        {/* Reference Notice Banner */}
        <div className="mt-6 p-4 bg-[#d4ad58]/10 border border-[#d4ad58]/30 rounded-sm flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#f7f4ed]/90">
          <Info size={18} className="text-[#d4ad58] shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <span className="font-semibold text-[#d4ad58]">Style Reference Guide:</span>{' '}
            Images represent the types of footwear we offer (Kolhapuris, formals, sandals, slippers, runners, party wear). We have an extensive in-store inventory in all standard Indian sizes (UK 6 – 11).
          </div>
          <button
            onClick={onNavigateContact}
            className="hidden md:inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#d4ad58] hover:underline shrink-0"
          >
            Visit Store <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-8 flex flex-col gap-5">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f7f4ed]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Kolhapuri, formal, casual, sports, slippers, sandals, mojaris..."
              className="w-full bg-[#242d36] border border-[#f7f4ed]/20 rounded-none pl-11 pr-4 py-3 text-sm text-[#f7f4ed] placeholder-[#f7f4ed]/40 focus:outline-none focus:border-[#d4ad58] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono uppercase text-[#d4ad58] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Horizontally Scrollable Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`shrink-0 px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all rounded-sm border ${
                selectedCategory === 'all'
                  ? 'bg-[#d4ad58] text-[#1c242c] border-[#d4ad58] font-bold shadow-md'
                  : 'bg-[#242d36] text-[#f7f4ed]/80 border-[#f7f4ed]/15 hover:border-[#d4ad58]/50'
              }`}
            >
              All Styles ({FOOTWEAR_STYLES.length})
            </button>

            {CATEGORIES.map((cat) => {
              const countInCat = FOOTWEAR_STYLES.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all rounded-sm border flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-[#d4ad58] text-[#1c242c] border-[#d4ad58] font-bold shadow-md'
                      : 'bg-[#242d36] text-[#f7f4ed]/80 border-[#f7f4ed]/15 hover:border-[#d4ad58]/50'
                  }`}
                >
                  <span>{cat.label}</span>
                  {countInCat > 0 && (
                    <span
                      className={`text-[0.62rem] px-1.5 py-0.5 rounded-full ${
                        selectedCategory === cat.id
                          ? 'bg-[#1c242c] text-[#d4ad58]'
                          : 'bg-[#f7f4ed]/10 text-[#f7f4ed]/60'
                      }`}
                    >
                      {countInCat}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footwear Style Cards Grid */}
        <div className="mt-10">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#f7f4ed]/10 text-xs font-mono text-[#f7f4ed]/60">
            <span>
              Showing {filteredStyles.length} footwear style categor{filteredStyles.length === 1 ? 'y' : 'ies'}
            </span>
            <span className="hidden sm:inline text-[#d4ad58]">
              Tap any style to see variety details & ask on WhatsApp
            </span>
          </div>

          {filteredStyles.length === 0 ? (
            <div className="text-center py-16 bg-[#242d36] border border-[#f7f4ed]/10 p-8">
              <Footprints size={40} className="mx-auto text-[#d4ad58]/60 mb-3" />
              <p className="font-display text-2xl text-white">No styles matched your search</p>
              <p className="text-sm text-[#f7f4ed]/60 mt-1 max-w-sm mx-auto">
                We carry many more footwear varieties in our Begumpeth store. Send us a message or visit us in person!
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-5 px-5 py-2.5 bg-[#d4ad58] text-[#1c242c] font-mono text-xs uppercase tracking-wider font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStyles.map((style) => (
                <article
                  key={style.id}
                  onClick={() => onSelectStyle(style)}
                  className="group bg-[#242d36] border border-[#f7f4ed]/10 hover:border-[#d4ad58]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-lg"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3.8] overflow-hidden bg-[#2d3742]">
                    <img
                      src={style.image}
                      alt={`${style.name} - ${style.type}`}
                      loading="lazy"
                      style={{ objectPosition: style.position }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c242c]/90 via-transparent to-black/20" />

                    {/* Style Reference Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#1c242c]/90 backdrop-blur-sm border border-[#d4ad58]/40 px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d4ad58]" />
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[#d4ad58]">
                        Reference Style
                      </span>
                    </div>

                    {/* Number Badge */}
                    <span className="absolute top-3 right-3 font-mono text-[0.62rem] text-[#f7f4ed]/60 bg-[#1c242c]/80 px-2 py-1">
                      0{style.id}
                    </span>

                    {/* Bottom Quick Look prompt */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#d4ad58] text-[#1c242c] p-2 rounded-full shadow-md">
                      <Eye size={16} />
                    </div>

                    {/* In-Store Badge on Image */}
                    <div className="absolute bottom-3 left-3 bg-[#1c242c]/85 border border-[#f7f4ed]/15 px-2.5 py-1 text-[0.62rem] font-mono text-[#f7f4ed]/90">
                      In-Store Variety: All Sizes (UK 6–11)
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-2xl text-white group-hover:text-[#d4ad58] transition-colors leading-snug">
                            {style.name}
                          </h3>
                          <p className="font-mono text-xs uppercase tracking-wider text-[#d4ad58] mt-0.5">
                            {style.type}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed text-[#f7f4ed]/70 mt-3 line-clamp-2">
                        {style.description}
                      </p>

                      <div className="mt-3 text-[0.72rem] text-[#f7f4ed]/80 bg-[#1c242c]/50 p-2.5 border border-[#f7f4ed]/10">
                        <span className="text-[#d4ad58] font-semibold">Ideal For:</span> {style.idealFor}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-5 pt-4 border-t border-[#f7f4ed]/10 flex items-center justify-between gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectStyle(style);
                        }}
                        className="text-xs font-mono tracking-wider uppercase text-[#f7f4ed] hover:text-[#d4ad58] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Eye size={13} />
                        <span>Style Details</span>
                      </button>

                      <button
                        onClick={(e) => handleWhatsAppQuickInquiry(e, style)}
                        className="inline-flex items-center gap-1.5 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm"
                        title="Inquire about this style on WhatsApp"
                      >
                        <MessageCircle size={13} />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Category Spotlight Mosaic (Original 10 Categories) */}
        <div className="mt-24 pt-12 border-t border-[#f7f4ed]/15">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4ad58]">
                Browse Categories • 10 Footwear Departments
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-white mt-1">
                Complete Footwear Range
              </h3>
            </div>
            <button
              onClick={onNavigateContact}
              className="text-xs font-mono uppercase tracking-wider text-[#d4ad58] hover:underline"
            >
              Ask what's new in store →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  const el = document.getElementById('collection');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="category-card group relative min-h-[170px] sm:min-h-[200px] overflow-hidden cursor-pointer border border-[#f7f4ed]/10 bg-[#242d36]"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  loading="lazy"
                  style={{ objectPosition: cat.position }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c242c]/90 via-[#1c242c]/40 to-transparent" />
                <div className="category-overlay absolute inset-0 bg-[#9a5645]/80 opacity-0 transition-opacity duration-300" />

                <div className="absolute inset-x-0 bottom-0 p-3.5 flex flex-col justify-end">
                  <span className="font-mono text-[0.58rem] uppercase tracking-widest text-[#d4ad58]">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display text-lg sm:text-xl text-white leading-tight">
                    {cat.label}
                  </h4>
                  <span className="text-[0.62rem] text-[#f7f4ed]/70 line-clamp-1 mt-0.5">
                    {cat.detail}
                  </span>
                </div>

                <div className="category-arrow absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white border border-white/20">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
