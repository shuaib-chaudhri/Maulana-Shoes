import React, { useState } from 'react';
import { SIZE_CHART, STORE } from '../data/storeData';
import { X, Ruler, Info, Footprints } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'table' | 'measure'>('table');

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all"
      onClick={onClose}
    >
      <div
        className="bg-[#1c242c] text-[#f7f4ed] w-full sm:max-w-xl sm:rounded-md border border-[#d4ad58]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#f7f4ed]/15 bg-[#242d36]">
          <div className="flex items-center gap-2">
            <Ruler size={16} className="text-[#d4ad58]" />
            <h3 className="font-display text-xl text-white">
              Standard Indian Footwear Sizing Reference
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#f7f4ed]/60 hover:text-white rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Informative Sub-header */}
        <div className="bg-[#d4ad58]/10 px-5 py-2.5 border-b border-[#d4ad58]/20 text-[0.72rem] text-[#d4ad58] font-mono">
          Note: We stock all standard Indian sizes (UK 6 to UK 11) across our footwear collections in Begumpeth.
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 border-b border-[#f7f4ed]/15 text-xs font-mono uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('table')}
            className={`py-3 text-center transition-colors border-b-2 ${
              activeTab === 'table'
                ? 'border-[#d4ad58] text-[#d4ad58] bg-[#242d36] font-bold'
                : 'border-transparent text-[#f7f4ed]/70 hover:text-white'
            }`}
          >
            Size Conversion Chart
          </button>
          <button
            onClick={() => setActiveTab('measure')}
            className={`py-3 text-center transition-colors border-b-2 ${
              activeTab === 'measure'
                ? 'border-[#d4ad58] text-[#d4ad58] bg-[#242d36] font-bold'
                : 'border-transparent text-[#f7f4ed]/70 hover:text-white'
            }`}
          >
            How to Measure at Home
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 space-y-5">
          {activeTab === 'table' ? (
            <div>
              <p className="text-xs text-[#f7f4ed]/75 mb-4 leading-relaxed">
                Footwear in India follows the UK standard sizing. You can use this chart to check your corresponding size before visiting our Begumpeth showroom:
              </p>

              <div className="border border-[#f7f4ed]/15 overflow-hidden">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-[#242d36] text-[#d4ad58] border-b border-[#f7f4ed]/15">
                    <tr>
                      <th className="p-3">India / UK</th>
                      <th className="p-3">US</th>
                      <th className="p-3">Euro (EU)</th>
                      <th className="p-3">Foot Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f7f4ed]/10">
                    {SIZE_CHART.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#242d36]/50 transition-colors">
                        <td className="p-3 font-bold text-white bg-[#d4ad58]/10">{row.uk}</td>
                        <td className="p-3 text-[#f7f4ed]/80">{row.us}</td>
                        <td className="p-3 text-[#f7f4ed]/80">{row.eu}</td>
                        <td className="p-3 text-[#d4ad58]">{row.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 bg-[#f7f4ed]/5 border border-[#d4ad58]/20 flex items-start gap-2 text-xs text-[#f7f4ed]/80">
                <Info size={15} className="text-[#d4ad58] shrink-0 mt-0.5" />
                <span>
                  <strong>Try-On Recommendation:</strong> Sizing can feel slightly different between hand-stitched Kolhapuri chappals, formal leather oxfords, and athletic runners. We invite you to try on multiple pairs at our store to feel the cushion and fit personally.
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-xs text-[#f7f4ed]/80">
              <p className="text-sm font-semibold text-white">
                Simple 3-Step Foot Measurement:
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-[#242d36] border border-[#f7f4ed]/10 flex gap-3">
                  <span className="font-mono text-base font-bold text-[#d4ad58]">01</span>
                  <div>
                    <h4 className="font-semibold text-white">Stand on Paper</h4>
                    <p className="mt-0.5 text-[#f7f4ed]/70">
                      Stand barefoot with your heel against a flat wall on a piece of paper.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#242d36] border border-[#f7f4ed]/10 flex gap-3">
                  <span className="font-mono text-base font-bold text-[#d4ad58]">02</span>
                  <div>
                    <h4 className="font-semibold text-white">Mark Heel and Longest Toe</h4>
                    <p className="mt-0.5 text-[#f7f4ed]/70">
                      Use a pencil held straight up to mark the edge of your heel and your longest toe.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#242d36] border border-[#f7f4ed]/10 flex gap-3">
                  <span className="font-mono text-base font-bold text-[#d4ad58]">03</span>
                  <div>
                    <h4 className="font-semibold text-white">Measure in Centimeters (cm)</h4>
                    <p className="mt-0.5 text-[#f7f4ed]/70">
                      Measure the distance between marks and match with our India/UK size chart.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#9a5645]/20 border border-[#9a5645]/40 flex items-center gap-2">
                <Footprints size={18} className="text-[#d4ad58] shrink-0" />
                <span>
                  Our store team in Begumpeth will happily measure your feet in person and recommend the best arch fit.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#f7f4ed]/15 bg-[#242d36] flex items-center justify-between">
          <span className="text-[0.65rem] font-mono uppercase text-[#d4ad58]">
            Begumpeth, Solapur
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#d4ad58] text-[#1c242c] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#e6c374] transition-colors rounded-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
