import { AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import React from 'react';
import { Antibiotic, InfectionSite, Regimen } from '../types';
import { AntibioticCard } from './AntibioticCard';

interface Props {
  site: InfectionSite;
  antibioticsData: Antibiotic[];
  crcl: number;
}

export function RegimenDisplay({ site, antibioticsData, crcl }: Props) {
  const getAntibioticDetails = (id: string) => antibioticsData.find(a => a.id === id);

  const renderRegimenGroup = (regimens: Regimen[], title: string, icon: React.ReactNode, bgColor: string, textColor: string) => (
    <div className="space-y-6">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${bgColor} border border-opacity-20`}>
        {icon}
        <h3 className={`text-lg font-bold ${textColor}`}>{title}</h3>
      </div>
      
      <div className="grid gap-6">
        {regimens.map((regimen) => (
          <div key={regimen.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-4 sm:px-6 py-4 border-b border-slate-200">
              <h4 className="text-base font-bold text-slate-800">{regimen.name}</h4>
              {regimen.description && (
                <p className="text-sm text-slate-500 mt-1">{regimen.description}</p>
              )}
            </div>
            <div className="p-4 sm:p-6 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regimen.antibiotics.map((abId) => {
                const ab = getAntibioticDetails(abId);
                if (!ab) return null;
                return <AntibioticCard key={ab.id} antibiotic={ab} crcl={crcl} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-10">
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 sm:p-6">
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">{site.name}</h2>
        <p className="text-indigo-700">{site.description}</p>
      </div>

      {renderRegimenGroup(
        site.primaryRegimens,
        "Основні схеми терапії",
        <CheckCircle2 className="text-emerald-600" size={24} />,
        "bg-emerald-50 border-emerald-200",
        "text-emerald-800"
      )}

      {site.alternativeRegimens.length > 0 && renderRegimenGroup(
        site.alternativeRegimens,
        "Альтернативні схеми (залежно від факторів ризику)",
        <ShieldAlert className="text-amber-600" size={24} />,
        "bg-amber-50 border-amber-200",
        "text-amber-800"
      )}
    </div>
  );
}
