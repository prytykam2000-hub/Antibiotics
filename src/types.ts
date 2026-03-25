export interface PatientParams {
  age: number | '';
  weight: number | ''; // kg
  height: number | ''; // cm
  sex: 'male' | 'female';
  creatinine: number | ''; // mcmol/L
}

export interface RenalAdjustment {
  condition: (crcl: number) => boolean;
  dose: string;
}

export interface Antibiotic {
  id: string;
  name: string;
  class: string;
  standardDose: string;
  renalAdjustments: RenalAdjustment[];
  notes?: string;
}

export interface Regimen {
  id: string;
  name: string;
  description?: string;
  antibiotics: string[]; // array of antibiotic IDs
}

export interface InfectionSite {
  id: string;
  name: string;
  description: string;
  primaryRegimens: Regimen[];
  alternativeRegimens: Regimen[];
}
