
import React from 'react';

interface ColorBandProps {
  number: number; // Number corresponding to the color (0–12)
}

// Map of numbers to colors
const numberToColor: { [key: number]: string } = {
  0: '#000000', // Black
  1: '#A52A2A', // Brown
  2: '#FF0000', // Red
  3: '#FFA500', // Orange
  4: '#FFFF00', // Yellow
  5: '#008000', // Green
  6: '#0000FF', // Blue
  7: '#8A2BE2', // Violet
  8: '#808080', // Gray
  9: '#D3D3D3', // White
  10: '#FFD700', // Gold
  11: '#C0C0C0', // Silver
  12: 'transparent', // None
};

const ColorBand: React.FC<ColorBandProps> = ({ number }) => {
  // Validate the input number
  if (number < 0 || number > 12) {
    throw new Error('Number must be between 0 and 12.');
  }

  const color = numberToColor[number];

  return (
    <div
    className=" mx-1  "
    style={{
      backgroundColor: color,
      height: '100%', // Match the height of the parent container
      width: '8px', 
    }}
  ></div>
  );
};

export default ColorBand;
