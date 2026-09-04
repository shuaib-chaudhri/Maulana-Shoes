import React from 'react';
import { Phone, MessageCircle, Compass, Ruler } from 'lucide-react';
import { STORE } from '../data/storeData';

interface MobileBottomBarProps {
  onOpenSizeGuide: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenSizeGuide }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#1c242c]/95 backdrop-blur-md border-t border-[#d4ad58]/30 px-3 py-2 sm:hidden shadow-[0_-8px_20px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-4 gap-1.5">
        {/* Call Button */}
        <a
          href={STORE.phoneLink}
          className="flex flex-col items-center justify-center py-1.5 text-[#f7f4ed] hover:text-[#d4ad58] transition-colors"
        >
          <div className="p-1 rounded-full bg-[#f7f4ed]/10 mb-0.5">
            <Phone size={16} className="text-[#d4ad58]" />
          </div>
          <span className="text-[0.6rem] font-mono tracking-wider uppercase">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={STORE.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 text-[#f7f4ed] hover:text-[#25D366] transition-colors"
        >
          <div className="p-1 rounded-full bg-[#25D366]/20 mb-0.5">
            <MessageCircle size={16} className="text-[#25D366]" />
          </div>
          <span className="text-[0.6rem] font-mono tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={STORE.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 text-[#f7f4ed] hover:text-[#d4ad58] transition-colors"
        >
          <div className="p-1 rounded-full bg-[#f7f4ed]/10 mb-0.5">
            <Compass size={16} className="text-[#d4ad58]" />
          </div>
          <span className="text-[0.6rem] font-mono tracking-wider uppercase">Maps</span>
        </a>

        {/* Size Guide Button */}
        <button
          onClick={onOpenSizeGuide}
          className="flex flex-col items-center justify-center py-1.5 text-[#f7f4ed] hover:text-[#d4ad58] transition-colors"
        >
          <div className="p-1 rounded-full bg-[#f7f4ed]/10 mb-0.5">
            <Ruler size={16} className="text-[#d4ad58]" />
          </div>
          <span className="text-[0.6rem] font-mono tracking-wider uppercase">Sizes</span>
        </button>
      </div>
    </div>
  );
};
