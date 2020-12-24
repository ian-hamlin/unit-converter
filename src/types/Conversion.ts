export interface Conversion {
  category: string;
  icon: string;
  sort: number;
  slug: string;
  units: Unit[];
}

export interface Unit {
  resourceName:string;
  multiplier: number;
  offset: number;
  formulaInvert: boolean;
}

export interface ConversionResult  {
  success: boolean;
  result?: number;
}

export default Conversion;
