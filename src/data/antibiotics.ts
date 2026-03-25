import { Antibiotic } from '../types';

export const antibiotics: Antibiotic[] = [
  {
    id: 'meropenem',
    name: 'Меропенем',
    class: 'Карбапенеми',
    standardDose: '1-2 г в/в кожні 8 годин',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 26 && crcl <= 50, dose: '1 г в/в кожні 12 годин' },
      { condition: (crcl) => crcl >= 10 && crcl <= 25, dose: '500 мг в/в кожні 12 годин' },
      { condition: (crcl) => crcl < 10, dose: '500 мг в/в кожні 24 години' },
    ],
    notes: 'Препарат вибору при підозрі на ESBL-продукуючі ентеробактерії.'
  },
  {
    id: 'piperacillin_tazobactam',
    name: 'Піперацилін/Тазобактам',
    class: 'Пеніциліни + інгібітори бета-лактамаз',
    standardDose: '4.5 г в/в кожні 6 годин (або подовжена інфузія)',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 20 && crcl <= 40, dose: '2.25 г в/в кожні 6 годин' },
      { condition: (crcl) => crcl < 20, dose: '2.25 г в/в кожні 8 годин' },
    ],
    notes: 'Активний проти синьогнійної палички (Pseudomonas aeruginosa).'
  },
  {
    id: 'vancomycin',
    name: 'Ванкоміцин',
    class: 'Глікопептиди',
    standardDose: '15-20 мг/кг в/в кожні 8-12 годин (навантажувальна доза 25-30 мг/кг)',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 50 && crcl <= 89, dose: '15 мг/кг кожні 12-24 год' },
      { condition: (crcl) => crcl >= 10 && crcl <= 49, dose: '15 мг/кг кожні 24-96 год (залежно від рівня в крові)' },
      { condition: (crcl) => crcl < 10, dose: '15 мг/кг кожні 4-7 днів (залежно від рівня в крові)' },
    ],
    notes: 'Необхідний терапевтичний лікарський моніторинг (ТЛМ). Цільовий trough рівень 15-20 мг/л для тяжких інфекцій.'
  },
  {
    id: 'ceftriaxone',
    name: 'Цефтріаксон',
    class: 'Цефалоспорини III покоління',
    standardDose: '1-2 г в/в кожні 24 години',
    renalAdjustments: [
      { condition: (crcl) => crcl < 10, dose: 'Максимальна доза 2 г/добу' },
    ],
    notes: 'Не потребує корекції дози при нирковій недостатності (виводиться з жовчю).'
  },
  {
    id: 'levofloxacin',
    name: 'Левофлоксацин',
    class: 'Фторхінолони',
    standardDose: '500-750 мг в/в кожні 24 години',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 20 && crcl <= 49, dose: '750 мг кожні 48 годин (після початкової дози 750 мг)' },
      { condition: (crcl) => crcl >= 10 && crcl <= 19, dose: '500 мг початково, потім 250 мг кожні 48 годин' },
      { condition: (crcl) => crcl < 10, dose: '500 мг початково, потім 250 мг кожні 48 годин' },
    ],
    notes: 'Ризик подовження інтервалу QT та тендиніту.'
  },
  {
    id: 'amikacin',
    name: 'Амікацин',
    class: 'Аміноглікозиди',
    standardDose: '15 мг/кг в/в кожні 24 години',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 40 && crcl <= 59, dose: '7.5 мг/кг кожні 24 год або 15 мг/кг кожні 36 год' },
      { condition: (crcl) => crcl >= 20 && crcl <= 39, dose: '7.5 мг/кг кожні 48 год або 15 мг/кг кожні 48 год' },
      { condition: (crcl) => crcl < 20, dose: '7.5 мг/кг кожні 72 год або за рівнем у крові' },
    ],
    notes: 'Нефротоксичний та ототоксичний. Рекомендований ТЛМ.'
  },
  {
    id: 'linezolid',
    name: 'Лінезолід',
    class: 'Оксазолідинони',
    standardDose: '600 мг в/в кожні 12 годин',
    renalAdjustments: [],
    notes: 'Не потребує корекції дози при нирковій недостатності. Ризик мієлосупресії при тривалому застосуванні (>14 днів).'
  },
  {
    id: 'colistin',
    name: 'Колістин',
    class: 'Поліміксини',
    standardDose: '9 млн МО навантажувальна доза, потім 4.5 млн МО кожні 12 годин',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 30 && crcl <= 50, dose: '2.5-3 млн МО кожні 12 годин' },
      { condition: (crcl) => crcl >= 10 && crcl <= 29, dose: '1.5 млн МО кожні 12 годин' },
      { condition: (crcl) => crcl < 10, dose: '1.5 млн МО кожні 24 години' },
    ],
    notes: 'Висока нефротоксичність. Застосовується лише для мультирезистентної флори.'
  },
  {
    id: 'cefepime',
    name: 'Цефепім',
    class: 'Цефалоспорини IV покоління',
    standardDose: '2 г в/в кожні 8 годин',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 30 && crcl <= 60, dose: '2 г в/в кожні 12 годин' },
      { condition: (crcl) => crcl >= 11 && crcl <= 29, dose: '2 г в/в кожні 24 години' },
      { condition: (crcl) => crcl <= 10, dose: '1 г в/в кожні 24 години' },
    ],
    notes: 'Ризик нейротоксичності (енцефалопатії) при передозуванні у пацієнтів з нирковою недостатністю.'
  },
  {
    id: 'metronidazole',
    name: 'Метронідазол',
    class: 'Нітроімідазоли',
    standardDose: '500 мг в/в кожні 8 годин',
    renalAdjustments: [
      { condition: (crcl) => crcl < 10, dose: '500 мг в/в кожні 12 годин' },
    ],
    notes: 'Активний проти анаеробної флори.'
  },
  {
    id: 'azithromycin',
    name: 'Азитроміцин',
    class: 'Макроліди',
    standardDose: '500 мг в/в кожні 24 години',
    renalAdjustments: [],
    notes: 'Атипова флора. Не потребує корекції дози при легкій/помірній нирковій недостатності.'
  },
  {
    id: 'clindamycin',
    name: 'Кліндаміцин',
    class: 'Лінкозаміди',
    standardDose: '600-900 мг в/в кожні 8 годин',
    renalAdjustments: [],
    notes: 'Інгібує синтез токсинів (важливо при некротизуючому фасціїті, СТШ).'
  },
  {
    id: 'ceftazidime',
    name: 'Цефтазидим',
    class: 'Цефалоспорини III покоління',
    standardDose: '2 г в/в кожні 8 годин',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 31 && crcl <= 50, dose: '1 г в/в кожні 12 годин' },
      { condition: (crcl) => crcl >= 16 && crcl <= 30, dose: '1 г в/в кожні 24 години' },
      { condition: (crcl) => crcl >= 6 && crcl <= 15, dose: '500 мг в/в кожні 24 години' },
      { condition: (crcl) => crcl < 6, dose: '500 мг в/в кожні 48 годин' },
    ],
    notes: 'Антисиньогнійна активність.'
  },
  {
    id: 'ampicillin',
    name: 'Ампіцилін',
    class: 'Амінопеніциліни',
    standardDose: '2 г в/в кожні 4 години (при менінгіті)',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 10 && crcl <= 50, dose: '2 г в/в кожні 6-8 годин' },
      { condition: (crcl) => crcl < 10, dose: '2 г в/в кожні 8-12 годин' },
    ],
    notes: 'Препарат вибору для лікування інфекцій, викликаних Listeria monocytogenes (особливо у пацієнтів >50 років або з імуносупресією).'
  },
  {
    id: 'acyclovir',
    name: 'Ацикловір',
    class: 'Противірусні',
    standardDose: '10 мг/кг в/в кожні 8 годин (при енцефаліті)',
    renalAdjustments: [
      { condition: (crcl) => crcl >= 25 && crcl <= 50, dose: '10 мг/кг в/в кожні 12 годин' },
      { condition: (crcl) => crcl >= 10 && crcl <= 24, dose: '10 мг/кг в/в кожні 24 години' },
      { condition: (crcl) => crcl < 10, dose: '5 мг/кг в/в кожні 24 години' },
    ],
    notes: 'Забезпечити адекватну гідратацію для профілактики кристалурії та гострого пошкодження нирок.'
  },
  {
    id: 'daptomycin',
    name: 'Даптоміцин',
    class: 'Ліпопептиди',
    standardDose: '6-8 мг/кг в/в кожні 24 години',
    renalAdjustments: [
      { condition: (crcl) => crcl < 30, dose: '6-8 мг/кг в/в кожні 48 годин' },
    ],
    notes: 'Не використовувати при пневмонії (інактивується сурфактантом). Моніторинг КФК (ризик міопатії).'
  },
  {
    id: 'fluconazole',
    name: 'Флуконазол',
    class: 'Азоли (протигрибкові)',
    standardDose: '800 мг навантажувальна доза, потім 400-800 мг в/в кожні 24 години',
    renalAdjustments: [
      { condition: (crcl) => crcl <= 50, dose: 'Зменшити підтримуючу дозу на 50% (навантажувальна доза не змінюється)' },
    ],
    notes: 'Активний проти Candida albicans. Неефективний проти C. krusei та багатьох штамів C. glabrata.'
  },
  {
    id: 'caspofungin',
    name: 'Каспофунгін',
    class: 'Ехінокандини (протигрибкові)',
    standardDose: '70 мг навантажувальна доза, потім 50 мг в/в кожні 24 години (70 мг при вазі >80 кг)',
    renalAdjustments: [],
    notes: 'Не потребує корекції при нирковій недостатності. Препарат вибору при інвазивному кандидозі у тяжких пацієнтів ВАІТ.'
  }
];
