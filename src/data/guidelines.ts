import { InfectionSite } from '../types';

export const guidelines: InfectionSite[] = [
  {
    id: 'cns_meningitis_cap',
    name: 'ЦНС: Гострий бактеріальний менінгіт (позалікарняний)',
    description: 'Емпірична терапія бактеріального менінгіту, набутого поза лікарнею.',
    primaryRegimens: [
      {
        id: 'cns-men-prim-1',
        name: 'Стандартна терапія (вік 2-50 років)',
        description: 'Покриття S. pneumoniae та N. meningitidis',
        antibiotics: ['ceftriaxone', 'vancomycin']
      }
    ],
    alternativeRegimens: [
      {
        id: 'cns-men-alt-1',
        name: 'Вік > 50 років або імуносупресія',
        description: 'Додаткове покриття Listeria monocytogenes',
        antibiotics: ['ceftriaxone', 'vancomycin', 'ampicillin']
      },
      {
        id: 'cns-men-alt-2',
        name: 'Тяжка алергія на пеніциліни/цефалоспорини',
        antibiotics: ['meropenem', 'vancomycin']
      }
    ]
  },
  {
    id: 'cns_meningitis_nosocomial',
    name: 'ЦНС: Нозокоміальний менінгіт / Вентрикуліт',
    description: 'Після нейрохірургічних втручань, ЧМТ або наявності лікворного шунта.',
    primaryRegimens: [
      {
        id: 'cns-noso-prim-1',
        name: 'Стандартна емпірична терапія',
        description: 'Покриття MRSA та синьогнійної палички',
        antibiotics: ['meropenem', 'vancomycin']
      }
    ],
    alternativeRegimens: [
      {
        id: 'cns-noso-alt-1',
        name: 'Альтернативна схема',
        antibiotics: ['cefepime', 'vancomycin']
      },
      {
        id: 'cns-noso-alt-2',
        name: 'При виділенні MDR Acinetobacter або Pseudomonas',
        antibiotics: ['colistin', 'meropenem']
      }
    ]
  },
  {
    id: 'cns_encephalitis',
    name: 'ЦНС: Вірусний енцефаліт',
    description: 'Підозра на герпетичний енцефаліт (HSV).',
    primaryRegimens: [
      {
        id: 'cns-enc-prim-1',
        name: 'Емпірична противірусна терапія',
        description: 'Почати негайно при підозрі до отримання результатів ПЛР ліквору',
        antibiotics: ['acyclovir']
      }
    ],
    alternativeRegimens: []
  },
  {
    id: 'crbsi',
    name: 'Катетер-асоційована інфекція кровотоку (CRBSI)',
    description: 'Сепсис, пов\'язаний з центральним венозним катетером.',
    primaryRegimens: [
      {
        id: 'crbsi-prim-1',
        name: 'Стандартна емпірична терапія',
        description: 'Покриття грампозитивної флори (вкл. MRSA)',
        antibiotics: ['vancomycin']
      }
    ],
    alternativeRegimens: [
      {
        id: 'crbsi-alt-1',
        name: 'Тяжкий сепсис / Нейтропенія / Стегновий катетер',
        description: 'Додаткове покриття грамнегативної флори',
        antibiotics: ['vancomycin', 'cefepime']
      },
      {
        id: 'crbsi-alt-2',
        name: 'Ризик VRE або непереносимість ванкоміцину',
        antibiotics: ['daptomycin']
      },
      {
        id: 'crbsi-alt-3',
        name: 'Підозра на кандидемію (повне парентеральне харчування, тривала АБТ)',
        antibiotics: ['caspofungin']
      }
    ]
  },
  {
    id: 'cap',
    name: 'Негоспітальна пневмонія (тяжкий перебіг)',
    description: 'Пацієнти ВАІТ з тяжкою негоспітальною пневмонією (НДП).',
    primaryRegimens: [
      {
        id: 'cap-prim-1',
        name: 'Стандартна терапія',
        description: 'Бета-лактам + макролід або фторхінолон',
        antibiotics: ['ceftriaxone', 'azithromycin']
      },
      {
        id: 'cap-prim-2',
        name: 'Альтернативна стандартна терапія',
        antibiotics: ['ceftriaxone', 'levofloxacin']
      }
    ],
    alternativeRegimens: [
      {
        id: 'cap-alt-1',
        name: 'Ризик Pseudomonas aeruginosa',
        description: 'Антисиньогнійний бета-лактам + фторхінолон',
        antibiotics: ['piperacillin_tazobactam', 'levofloxacin']
      },
      {
        id: 'cap-alt-2',
        name: 'Ризик Pseudomonas aeruginosa (альтернатива)',
        antibiotics: ['cefepime', 'levofloxacin']
      },
      {
        id: 'cap-alt-3',
        name: 'Ризик MRSA',
        description: 'Додати анти-MRSA препарат',
        antibiotics: ['ceftriaxone', 'azithromycin', 'vancomycin']
      }
    ]
  },
  {
    id: 'vap',
    name: 'Госпітальна/Вентилятор-асоційована пневмонія (ГАП/ВАП)',
    description: 'Пневмонія, що виникла через 48+ годин після госпіталізації або інтубації.',
    primaryRegimens: [
      {
        id: 'vap-prim-1',
        name: 'Низький ризик MRSA та MDR',
        description: 'Монотерапія антисиньогнійним бета-лактамом',
        antibiotics: ['piperacillin_tazobactam']
      },
      {
        id: 'vap-prim-2',
        name: 'Низький ризик MRSA та MDR (альтернатива)',
        antibiotics: ['cefepime']
      }
    ],
    alternativeRegimens: [
      {
        id: 'vap-alt-1',
        name: 'Високий ризик MRSA',
        description: 'Додати Ванкоміцин або Лінезолід',
        antibiotics: ['piperacillin_tazobactam', 'vancomycin']
      },
      {
        id: 'vap-alt-2',
        name: 'Високий ризик MDR Pseudomonas',
        description: 'Два антисиньогнійні препарати різних класів',
        antibiotics: ['meropenem', 'amikacin', 'vancomycin']
      },
      {
        id: 'vap-alt-3',
        name: 'Карбапенем-резистентна флора',
        description: 'Терапія відчаю',
        antibiotics: ['colistin', 'meropenem']
      }
    ]
  },
  {
    id: 'iai',
    name: 'Інтраабдомінальні інфекції (ускладнені)',
    description: 'Перитоніт, абсцеси черевної порожнини, перфорація ШКТ.',
    primaryRegimens: [
      {
        id: 'iai-prim-1',
        name: 'Низький ризик (позалікарняні)',
        description: 'Активність проти грамнегативних та анаеробів',
        antibiotics: ['ceftriaxone', 'metronidazole']
      },
      {
        id: 'iai-prim-2',
        name: 'Високий ризик / Госпітальні',
        description: 'Широкий спектр',
        antibiotics: ['piperacillin_tazobactam']
      }
    ],
    alternativeRegimens: [
      {
        id: 'iai-alt-1',
        name: 'Тяжкий перебіг / Сепсис / ESBL',
        antibiotics: ['meropenem']
      },
      {
        id: 'iai-alt-2',
        name: 'Алергія на пеніциліни',
        antibiotics: ['cefepime', 'metronidazole']
      }
    ]
  },
  {
    id: 'uti',
    name: 'Інфекції сечовивідних шляхів (уросепсис)',
    description: 'Ускладнені ІСШ, пієлонефрит, уросепсис.',
    primaryRegimens: [
      {
        id: 'uti-prim-1',
        name: 'Стандартна емпірична терапія',
        antibiotics: ['ceftriaxone']
      },
      {
        id: 'uti-prim-2',
        name: 'При підозрі на синьогнійну паличку',
        antibiotics: ['cefepime']
      }
    ],
    alternativeRegimens: [
      {
        id: 'uti-alt-1',
        name: 'Тяжкий сепсис / Ризик ESBL',
        antibiotics: ['meropenem']
      },
      {
        id: 'uti-alt-2',
        name: 'Ризик MDR Pseudomonas',
        antibiotics: ['piperacillin_tazobactam', 'amikacin']
      }
    ]
  },
  {
    id: 'ssti',
    name: 'Інфекції шкіри та м\'яких тканин (некротизуючі)',
    description: 'Некротизуючий фасціїт, гангрена Фурньє, тяжкі інфекції діабетичної стопи.',
    primaryRegimens: [
      {
        id: 'ssti-prim-1',
        name: 'Широкий спектр + інгібування токсинів',
        description: 'Покриття грам(+), грам(-), анаеробів та MRSA',
        antibiotics: ['piperacillin_tazobactam', 'vancomycin', 'clindamycin']
      }
    ],
    alternativeRegimens: [
      {
        id: 'ssti-alt-1',
        name: 'Альтернативна схема (алергія або ESBL)',
        antibiotics: ['meropenem', 'linezolid']
      }
    ]
  },
  {
    id: 'sepsis_unknown',
    name: 'Сепсис невідомої етіології',
    description: 'Септичний шок без чіткого вогнища інфекції.',
    primaryRegimens: [
      {
        id: 'sepsis-prim-1',
        name: 'Максимально широкий спектр',
        description: 'Покриття грам(-), грам(+) та MRSA',
        antibiotics: ['meropenem', 'vancomycin']
      }
    ],
    alternativeRegimens: [
      {
        id: 'sepsis-alt-1',
        name: 'Альтернатива',
        antibiotics: ['piperacillin_tazobactam', 'vancomycin']
      },
      {
        id: 'sepsis-alt-2',
        name: 'Підозра на грибкову інфекцію',
        description: 'Додати ехінокандин (наприклад, Каспофунгін)',
        antibiotics: ['meropenem', 'vancomycin', 'caspofungin']
      }
    ]
  },
  {
    id: 'endocarditis',
    name: 'Інфекційний ендокардит',
    description: 'Емпірична терапія гострого інфекційного ендокардиту.',
    primaryRegimens: [
      {
        id: 'endo-prim-1',
        name: 'Нативний клапан',
        description: 'Покриття стафілококів, стрептококів та ентерококів',
        antibiotics: ['vancomycin', 'ceftriaxone']
      }
    ],
    alternativeRegimens: [
      {
        id: 'endo-alt-1',
        name: 'Протезований клапан (< 1 року після операції)',
        description: 'Додати Рифампіцин та Гентаміцин (не включені в базовий список)',
        antibiotics: ['vancomycin', 'cefepime']
      }
    ]
  },
  {
    id: 'febrile_neutropenia',
    name: 'Нейтропенічна лихоманка',
    description: 'Емпірична терапія у пацієнтів з нейтропенією (нейтрофіли < 500/мкл).',
    primaryRegimens: [
      {
        id: 'fn-prim-1',
        name: 'Монотерапія антисиньогнійним бета-лактамом',
        description: 'Препарат вибору',
        antibiotics: ['cefepime']
      },
      {
        id: 'fn-prim-2',
        name: 'Альтернативна монотерапія',
        antibiotics: ['piperacillin_tazobactam']
      }
    ],
    alternativeRegimens: [
      {
        id: 'fn-alt-1',
        name: 'Тяжкий стан / Гемодинамічна нестабільність',
        antibiotics: ['meropenem']
      },
      {
        id: 'fn-alt-2',
        name: 'Підозра на катетерну інфекцію або MRSA',
        description: 'Додати Ванкоміцин',
        antibiotics: ['cefepime', 'vancomycin']
      }
    ]
  },
  {
    id: 'biliary_tract',
    name: 'Інфекції жовчовивідних шляхів',
    description: 'Гострий холангіт, гострий холецистит.',
    primaryRegimens: [
      {
        id: 'bil-prim-1',
        name: 'Легкий / середній ступінь',
        description: 'Покриття кишкової флори',
        antibiotics: ['ceftriaxone', 'metronidazole']
      }
    ],
    alternativeRegimens: [
      {
        id: 'bil-alt-1',
        name: 'Тяжкий ступінь / Госпітальна інфекція',
        description: 'Широкий спектр з антисиньогнійною активністю',
        antibiotics: ['piperacillin_tazobactam']
      },
      {
        id: 'bil-alt-2',
        name: 'Критичний стан / Ризик ESBL',
        antibiotics: ['meropenem']
      }
    ]
  },
  {
    id: 'osteomyelitis',
    name: 'Остеомієліт / Септичний артрит',
    description: 'Гострі інфекції кісток та суглобів.',
    primaryRegimens: [
      {
        id: 'osteo-prim-1',
        name: 'Емпірична терапія',
        description: 'Покриття S. aureus (вкл. MRSA) та грамнегативних бактерій',
        antibiotics: ['vancomycin', 'ceftriaxone']
      }
    ],
    alternativeRegimens: [
      {
        id: 'osteo-alt-1',
        name: 'Після травми / операції (ризик Pseudomonas)',
        antibiotics: ['vancomycin', 'cefepime']
      }
    ]
  },
  {
    id: 'c_difficile',
    name: 'Clostridioides difficile інфекція (CDI)',
    description: 'Тяжка або фульмінантна форма інфекції C. difficile.',
    primaryRegimens: [
      {
        id: 'cdi-prim-1',
        name: 'Фульмінантна форма (шок, ілеус, мегаколон)',
        description: 'Поєднання перорального/ентерального ванкоміцину та в/в метронідазолу',
        antibiotics: ['metronidazole', 'vancomycin']
      }
    ],
    alternativeRegimens: []
  }
];
