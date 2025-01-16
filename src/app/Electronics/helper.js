const getBandColorNums = () => {
  let tolerance = genToleranceNum();
  let numOfDigits;

  // Determine the number of digits based on the tolerance value
  if (tolerance === undefined) {
    // If tolerance is 0, generate 2 digits
    numOfDigits = 2;
  } else {
    // Otherwise, randomly select 2 or 3 digits
    numOfDigits = Math.floor(Math.random() * 2) + 2;
  }

  let bandColors = [];

  // Add random digits for the first part of the resistor color code
  for (let i = 0; i < numOfDigits; i++) {
    let num;
    if (i === 0) {
      // First band should not be black (0)
      num = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 9
    } else {
      // Other bands can include 0
      num = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    }
    bandColors.push(num);
  }

  // Add multiplier to the resistor code (multiplier is between 0 and 9)
  let multiplier = Math.floor(Math.random() * 10);
  bandColors.push(multiplier);

  // Add tolerance to the resistor code if valid
  if (tolerance !== undefined) {
    bandColors.push(tolerance);
  }

  return bandColors;
};

const genToleranceNum = () => {
  const excludedNumbers = [3, 4, 9]; // Exclude only 3, 4, and 9
  let num;

  // Generate a random number between 0 and 13 excluding 3, 4, and 9
  do {
    num = Math.floor(Math.random() * 12);
  } while (excludedNumbers.includes(num));

  // If the number is 0, do not return anything (undefined will be returned)
  if (num === 0) {
    return undefined;
  }

  return num;
};

export { getBandColorNums };
