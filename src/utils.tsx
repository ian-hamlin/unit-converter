import Conversion, { ConversionResult } from "./types/Conversion";

export function chunkArray(input: Conversion[], chunk_size: number) {
  var results = [];

  while (input.length) {
    results.push(input.splice(0, chunk_size));
  }

  return results;
}

export function convert(source: string, tarrget: string, detail: Conversion, valueToConvert: string) : ConversionResult {
  const sourceUnit = detail.units.filter((unit) => unit.resourceName === source);
  const targetUnit = detail.units.filter((unit) => unit.resourceName === tarrget);

  if (sourceUnit.length === 0)
  {
    return {
      success: false,
      result: undefined,
    };
  }

  if (targetUnit.length === 0)
  {
    return {
      success: false,
      result: undefined,
    };
  }

  if (Number.isNaN(valueToConvert))
  {
    return {
      success: false,
      result: undefined,
    };
  }

  const amount: number = Number.parseFloat(valueToConvert);

  if (source === tarrget) {
    return {
      success: true,
      result: amount,
    };
  }

  let result : number = 0.0;

  if (sourceUnit[0].formulaInvert)
  {
      result = (amount - sourceUnit[0].offset) * sourceUnit[0].multiplier;
  }
  else
  {
      result = amount * sourceUnit[0].multiplier + sourceUnit[0].offset;
  }

  // Convert to the target unit
  if (targetUnit[0].formulaInvert)
  {
      result = result / targetUnit[0].multiplier + targetUnit[0].offset;
  }
  else
  {
      result = (result - targetUnit[0].offset) / targetUnit[0].multiplier;
  }  

  return {
    success: true,
    result: result,
  };
}