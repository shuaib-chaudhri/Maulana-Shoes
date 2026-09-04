import React from 'react';
import { FootwearStyle, STORE } from '../data/storeData';
import { X, MessageCircle, Phone, Check, Footprints, Ruler, Sparkles, Store, Info } from 'lucide-react';

interface ProductModalProps {
  style: FootwearStyle | null;
  onClose: () => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  style,
  onClose,
  onOpenSizeGuide,
}) => {
  if (!style) return null;

  const handleWhatsAppInquiry = () => {
    const text = `Hello Maulana Shoe Center, I am interested in your "${style.name}" (${style.type}) collection. What designs and color options do you currently have in stock at your Begumpeth store?`;
    window.open(
      `https://wa.me/${STORE.whatsappRaw}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all"
      onClick={onClose}
    >
      <div
        className="bg-[#1c242c] text-[#f7f4ed] w-full sm:max-w-2xl sm:rounded-md border border-[#d4ad58]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#f7f4ed]/15 bg-[#242d36]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#d4ad58]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4ad58]">
              Style Reference • In-Store Category
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#f7f4ed]/60 hover:text-white rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Main Photo & Description */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
            <div className="relative aspect-[4/3.5] overflow-hidden bg-[#2d3742] border border-[#f7f4ed]/15">
              <img
                src={style.image}
                alt={style.name}
                style={{ objectPosition: style.position }}
                className="h-full w-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#1c242c]/90 text-[#d4ad58] text-[0.6rem] font-mono px-2 py-0.5 border border-[#d4ad58]/30">
                Style #{style.id}
              </span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#d4ad58]">
                {style.type}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-white mt-1">
                {style.name}
              </h2>

              <p className="mt-2.5 text-xs text-[#f7f4ed]/75 leading-relaxed">
                {style.description}
              </p>

              <div className="mt-3 text-[0.72rem] text-[#f7f4ed]/80 bg-[#f7f4ed]/5 p-2.5 border border-[#f7f4ed]/10">
                <span className="text-[#d4ad58] font-semibold">Best Suited For:</span> {style.idealFor}
              </div>
            </div>
          </div>

          {/* Style Reference Clarification Box */}
          <div className="p-3.5 bg-[#d4ad58]/10 border border-[#d4ad58]/30 text-xs text-[#f7f4ed]/90 flex items-start gap-2.5">
            <Info size={16} className="text-[#d4ad58] mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-[#d4ad58]">Representative Style:</span>{' '}
              This model demonstrates the type and craftsmanship of shoes we stock. When you visit our Begumpeth showroom, you can explore many more current variations, leather shades, and find your exact fit across all Indian sizes (UK 6 to 11).
            </div>
          </div>

          {/* Key In-Store Advantages */}
          <div className="bg-[#242d36] p-4 border border-[#f7f4ed]/10 space-y-3">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#d4ad58] block">
              In-Store Availability & Features
            </span>
            <div className="space-y-2">
              {style.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#f7f4ed]/85">
                  <Check size={14} className="text-[#d4ad58] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* In-Store Trial Guarantee */}
          <div className="p-4 bg-[#9a5645]/20 border border-[#9a5645]/40 flex items-start gap-3 text-xs text-[#f7f4ed]/90">
            <Footprints size={18} className="text-[#d4ad58] mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-white">Trial Assurance in Begumpeth:</span>{' '}
              Shoe comfort is personal. Visit our store to try on multiple pairs on our trial rugs, walk around, and get honest sizing advice from staff with 34+ years of local experience.
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-5 border-t border-[#f7f4ed]/15 bg-[#242d36] flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsAppInquiry}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 font-mono text-xs uppercase tracking-wider font-bold transition-colors shadow-md rounded-sm"
          >
            <MessageCircle size={16} />
            Ask About This Style on WhatsApp
          </button>

          <a
            href={STORE.phoneLink}
            className="flex items-center justify-center gap-2 border border-[#f7f4ed]/30 hover:border-[#d4ad58] text-[#f7f4ed] hover:text-[#d4ad58] py-3 px-5 font-mono text-xs uppercase tracking-wider transition-colors rounded-sm"
          >
            <Phone size={15} />
            Call Store
          </a>
        </div>
      </div>
    </div>
  );
};
