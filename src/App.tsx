/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, BookOpen, ChevronDown, Stethoscope, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import { Calculator } from './components/Calculator';
import { RegimenDisplay } from './components/RegimenDisplay';
import { antibiotics } from './data/antibiotics';
import { guidelines } from './data/guidelines';
import { PatientParams } from './types';
import { calculateCrCl } from './utils/calculators';

export default function App() {
  const [params, setParams] = useState<PatientParams>({
    age: '',
    weight: '',
    height: '',
    sex: 'male',
    creatinine: ''
  });

  const [selectedSiteId, setSelectedSiteId] = useState<string>(guidelines[0].id);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const crcl = calculateCrCl(Number(params.age), Number(params.weight), params.sex, Number(params.creatinine));
  const selectedSite = guidelines.find(g => g.id === selectedSiteId) || guidelines[0];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-inner">
              <Stethoscope className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">ICU Antibiotic Guide</h1>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Емпірична терапія у ВАІТ</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            <Activity size={16} className="text-indigo-500" />
            <span>Оновлено: 2024</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section>
          <Calculator params={params} onChange={setParams} />
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <BookOpen size={20} />
              </div>
              <h2 className="text-lg font-semibold text-slate-800">Локалізація інфекції</h2>
            </div>
            
            <button
              onClick={() => setIsSelectorOpen(true)}
              className="w-full flex items-center justify-between bg-white border border-slate-300 hover:border-indigo-400 p-4 rounded-xl shadow-sm transition-all text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <div className="pr-4">
                <span className="block text-lg font-bold text-slate-800">{selectedSite.name}</span>
                <span className="block text-sm text-slate-500 mt-1 line-clamp-1 sm:line-clamp-none">{selectedSite.description}</span>
              </div>
              <div className="bg-slate-100 p-2 rounded-full shrink-0">
                <ChevronDown className="text-slate-600" size={20} />
              </div>
            </button>
          </div>
          
          <div className="p-4 sm:p-8 bg-slate-50/30">
            <RegimenDisplay 
              site={selectedSite} 
              antibioticsData={antibiotics} 
              crcl={crcl} 
            />
          </div>
        </section>
      </main>

      <AnimatePresence>
        {isSelectorOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSelectorOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none">
              <motion.div 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-white w-full max-w-2xl max-h-[85vh] rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
              >
                <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
                  <h3 className="text-xl font-bold text-slate-800">Оберіть локалізацію</h3>
                  <button 
                    onClick={() => setIsSelectorOpen(false)} 
                    className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="overflow-y-auto p-4 sm:p-6 space-y-3 bg-slate-50">
                  {guidelines.map((site) => (
                    <button
                      key={site.id}
                      onClick={() => {
                        setSelectedSiteId(site.id);
                        setIsSelectorOpen(false);
                      }}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                        selectedSiteId === site.id 
                          ? 'border-indigo-500 bg-indigo-50/50 ring-1 ring-indigo-500 shadow-md' 
                          : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm'
                      }`}
                    >
                      <h4 className={`font-bold text-base sm:text-lg ${selectedSiteId === site.id ? 'text-indigo-900' : 'text-slate-800'}`}>
                        {site.name}
                      </h4>
                      <p className={`text-sm mt-1.5 ${selectedSiteId === site.id ? 'text-indigo-700' : 'text-slate-500'}`}>
                        {site.description}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            <strong>Увага:</strong> Цей застосунок є лише довідковим інструментом і не замінює клінічне мислення лікаря. 
            Дозування та вибір препаратів повинні бути індивідуалізовані на основі локальних даних про резистентність (антибіотикограми), 
            стану пацієнта та інших клінічних факторів.
          </p>
        </div>
      </footer>
    </div>
  );
}
