import React from 'react';
import ColorBand from './ColorBand';

interface BandsProps {
  bands: number[];
}

const Resistor: React.FC<BandsProps> = ({ bands }) => {
  return (
    <div className="flex items-center ml-8">
      {/* Left wire */}
      <div className="h-1 w-10 bg-black"></div>
      
      {/* Resistor body */}
      <div className="flex border-2 border-black w-28 px-1 h-14 items-center">
        {bands.map((num, idx) => (
          <ColorBand key={idx} number={num} />
        ))}
      </div>
      
      {/* Right wire */}
      <div className="h-1 w-10 bg-black"></div>
    </div>
  );
};

export default Resistor;
