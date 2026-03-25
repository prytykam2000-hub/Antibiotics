import { Activity, AlertTriangle, Calculator as CalcIcon, Info } from 'lucide-react';
import React from 'react';
import { PatientParams } from '../types';
import { calculateCrCl, calculateEGFR } from '../utils/calculators';

interface Props {
  params: PatientParams;
  onChange: (params: PatientParams) => void;
}

export function Calculator({ params, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({
      ...params,
      [name]: name === 'sex' ? value : (value === '' ? '' : Number(value))
    });
  };

  const crcl = calculateCrCl(Number(params.age), Number(params.weight), params.sex, Number(params.creatinine));
  const egfr = calculateEGFR(Number(params.age), params.sex, Number(params.creatinine));

  const isRenalImpairment = crcl > 0 && crcl < 50;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
        <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
          <CalcIcon size={20} />
        </div>
        <h2 className="text-lg font-semibold text-slate-800">Калькулятор функції нирок</h2>
      </div>
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Вік (роки)</label>
              <input
                type="number"
                name="age"
                value={params.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Наприклад, 65"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Стать</label>
              <select
                name="sex"
                value={params.sex}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
              >
                <option value="male">Чоловіча</option>
                <option value="female">Жіноча</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Вага (кг)</label>
              <input
                type="number"
                name="weight"
                value={params.weight}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Наприклад, 75"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Креатинін (мкмоль/л)</label>
              <input
                type="number"
                name="creatinine"
                value={params.creatinine}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Наприклад, 120"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col justify-center">
          {crcl > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Кліренс креатиніну (Cockcroft-Gault)</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold ${isRenalImpairment ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {crcl}
                    </span>
                    <span className="text-slate-500 font-medium">мл/хв</span>
                  </div>
                </div>
                <Activity className={isRenalImpairment ? 'text-rose-400' : 'text-emerald-400'} size={32} />
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-500 font-medium">ШКФ (CKD-EPI 2021)</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-slate-700">{egfr}</span>
                  <span className="text-xs text-slate-500">мл/хв/1.73м²</span>
                </div>
              </div>

              {isRenalImpairment && (
                <div className="mt-2 bg-rose-50 text-rose-700 p-3 rounded-lg text-sm flex gap-2 items-start">
                  <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                  <p>Знижена функція нирок. Зверніть увагу на попередження щодо корекції дози антибіотиків.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-slate-400 flex flex-col items-center gap-2">
              <Info size={24} />
              <p className="text-sm">Введіть дані пацієнта для розрахунку функції нирок</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
