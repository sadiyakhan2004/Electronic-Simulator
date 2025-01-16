function calculateResistance(bands) {
    // Define resistor data for digits, multipliers, and tolerances
    const resistorData = [
      { digit: 0, multiplier: 1, tolerance: null },
      { digit: 1, multiplier: 10, tolerance: 1 },
      { digit: 2, multiplier: 100, tolerance: 2 },
      { digit: 3, multiplier: 1000, tolerance: null },
      { digit: 4, multiplier: 10000, tolerance: null },
      { digit: 5, multiplier: 100000, tolerance: 0.5 },
      { digit: 6, multiplier: 1000000, tolerance: 0.25 },
      { digit: 7, multiplier: 10000000, tolerance: 0.1 },
      { digit: 8, multiplier: 100000000, tolerance: 0.05 },
      { digit: 9, multiplier: 1000000000, tolerance: null },
      { digit: null, multiplier: 0.1, tolerance: 5 },  // Gold
      { digit: null, multiplier: 0.01, tolerance: 10 }, // Silver
    ];
  
     // Get the significant digits (first two or three bands)
  const isFiveBand = bands.length === 5;
  const significantBands = isFiveBand ? bands.slice(0, 3) : bands.slice(0, 2);

  // Get the multiplier band
  const multiplierBand = isFiveBand ? bands[3] : bands[2];

  // Get the tolerance band (last band if present)
  const toleranceBand = bands.length > 3 ? bands[bands.length - 1] : null;

  // Calculate significant digits
  let significantDigits = "";
  for (let i = 0; i < significantBands.length; i++) {
    significantDigits += resistorData[significantBands[i]]?.digit;
  }

  // Check for invalid significant bands
  if (significantDigits.includes(undefined)) {
    throw new Error("Invalid color code for significant digits.");
  }

  // Get the multiplier value
  const multiplier = resistorData[multiplierBand]?.multiplier;
  if (multiplier === undefined) {
    throw new Error("Invalid color code for multiplier.");
  }

  // Get the tolerance value (default to 20% if not specified or invalid)
  const tolerance = resistorData[toleranceBand]?.tolerance ?? 20;

  // Calculate resistance
  let resistanceValue = parseInt(significantDigits) * multiplier;

  // Determine the resistance unit
  let unit = "Ω";
  if (resistanceValue >= 1e9) {
    resistanceValue /= 1e9;
    unit = "GΩ";
  } else if (resistanceValue >= 1e6) {
    resistanceValue /= 1e6;
    unit = "MΩ";
  } else if (resistanceValue >= 1e3) {
    resistanceValue /= 1e3;
    unit = "KΩ";
  }

  // Format the resistance value
  resistanceValue = resistanceValue % 1 === 0 ? resistanceValue.toFixed(0) : resistanceValue.toFixed(2);

  // Convert resistance to string before returning
  return {
    resistance: resistanceValue.toString(),
    unit: unit,
    tolerance: `${tolerance}`,
  };
  }
  
  export { calculateResistance };
  