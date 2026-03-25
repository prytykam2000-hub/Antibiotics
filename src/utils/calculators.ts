export function calculateCrCl(age: number, weight: number, sex: 'male' | 'female', creatinineMcmol: number): number {
  if (!age || !weight || !creatinineMcmol) return 0;
  
  const scrMgDl = creatinineMcmol / 88.4;
  let crcl = ((140 - age) * weight) / (72 * scrMgDl);
  
  if (sex === 'female') {
    crcl *= 0.85;
  }
  
  return Math.round(crcl);
}

export function calculateEGFR(age: number, sex: 'male' | 'female', creatinineMcmol: number): number {
  if (!age || !creatinineMcmol) return 0;
  
  const scrMgDl = creatinineMcmol / 88.4;
  const kappa = sex === 'female' ? 0.7 : 0.9;
  const alpha = sex === 'female' ? -0.241 : -0.302;
  
  const min = Math.min(scrMgDl / kappa, 1);
  const max = Math.max(scrMgDl / kappa, 1);
  
  let egfr = 142 * Math.pow(min, alpha) * Math.pow(max, -1.200) * Math.pow(0.9938, age);
  
  if (sex === 'female') {
    egfr *= 1.012;
  }
  
  return Math.round(egfr);
}
