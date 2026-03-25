import { AlertCircle, CheckCircle2, Info, Pill } from 'lucide-react';
import React from 'react';
import { Antibiotic } from '../types';

interface AntibioticCardProps {
  antibiotic: Antibiotic;
  crcl: number;
  key?: React.Key;
}

export function AntibioticCard({ antibiotic, crcl }: AntibioticCardProps) {
  const activeAdjustment = crcl > 0 
    ? antibiotic.renalAdjustments.find(adj => adj.condition(crcl))
    : undefined;

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
        <div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Pill size={18} className="text-indigo-500" />
            {antibiotic.name}
          </h3>
          <p className="text-sm text-slate-500 font-medium mt-0.5">{antibiotic.class}</p>
        </div>
      </div>
      
      <div className="p-4 sm:p-5 space-y-4">
        <div>
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Стандартна доза</p>
          <div className="flex items-start gap-2 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
            <span className="font-medium">{antibiotic.standardDose}</span>
          </div>
        </div>

        {crcl > 0 && (
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Доза для пацієнта (CrCl: {crcl} мл/хв)</p>
            {activeAdjustment ? (
              <div className="flex items-start gap-2 text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200">
                <AlertCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block mb-0.5">Потрібна корекція:</span>
                  <span className="font-medium">{activeAdjustment.dose}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2 text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-medium">Корекція дози не потрібна. Використовуйте стандартну дозу.</span>
              </div>
            )}
          </div>
        )}

        {antibiotic.notes && (
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-start gap-2 text-slate-600 text-sm">
              <Info size={16} className="text-indigo-400 mt-0.5 shrink-0" />
              <p>{antibiotic.notes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
