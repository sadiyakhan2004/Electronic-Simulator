"use client"
import React, { useEffect, useState } from "react";
import { getBandColorNums } from "@/app/electronics/helper.js";
import { calculateResistance } from "@/app/electronics/calculateResult";

import Button from "@/components/ui/Button";
import Resistor from "@/components/electronics/Resistor";
import AnswerBox from "@/components/electronics/AnswerBox";

function Question() {
  const [bands, setBands] = useState<number[]>([]); 
  const [resistance, setResistance] = useState<string>("23");
  const [unit, setUnit] = useState<string>("Ω");
  const [tolerance, setTolerance] = useState<string>("5");

  useEffect(() => {
    let colorBands = getBandColorNums();
    setBands(colorBands);
  }, []);

  useEffect(() => {
    if (bands.length > 0) {
      const result = calculateResistance(bands);
      setResistance(result.resistance);
      setUnit(result.unit);
      // Ensure tolerance is not null
      setTolerance(result.tolerance || "20"); // Default to "N/A" if tolerance is null
    }
  }, [bands]);

  const handleChangeQuestion = () => {
    const newBands = getBandColorNums(); // Generate new band numbers
   // console.log(bands);
    setBands(newBands);
  };

  return (
    <div className="relative px-6 bg-gray-50 w-full max-w-4xl mx-auto border-2 border-green-600 h-[770px]">
      {/* Button in the top-right corner */}
      <div className="absolute top-2 right-4 mt-0">
        <Button
          onClick={handleChangeQuestion}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Reload
        </Button>
      </div>

      {/* Resistor and AnswerBox container - No margin-top, stick to top */}
      <div className="flex flex-col items-start mt-20 pt-4">
        <Resistor bands={bands} />
        <AnswerBox
          actualResistance={resistance}
          actualUnit={unit}
          actualTolerance={tolerance}
        />
      </div>
    </div>
  );
}

export default Question;
