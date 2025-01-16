"use client";
import React from "react";

interface ResistorData {
  colorName: string;
  digit: number | string;
  multiplier: string;
  tolerance: string;
  colorSample: string;
}

const ResistorColorCodes = () => {
  const resistorData: ResistorData[] = [
    { colorName: "Black", digit: 0, multiplier: "10<sup>0</sup> Ω", tolerance: "", colorSample: "#000000" },
    { colorName: "Brown", digit: 1, multiplier: "10<sup>1</sup> Ω", tolerance: "1", colorSample: "#A52A2A" },
    { colorName: "Red", digit: 2, multiplier: "10<sup>2</sup> Ω", tolerance: "2", colorSample: "#FF0000" },
    { colorName: "Orange", digit: 3, multiplier: "10<sup>3</sup> Ω (1 KΩ)", tolerance: "", colorSample: "#FFA500" },
    { colorName: "Yellow", digit: 4, multiplier: "10<sup>4</sup> Ω (10 KΩ)", tolerance: "", colorSample: "#FFFF00" },
    { colorName: "Green", digit: 5, multiplier: "10<sup>5</sup> Ω (100 KΩ)", tolerance: "0.5", colorSample: "#008000" },
    { colorName: "Blue", digit: 6, multiplier: "10<sup>6</sup> Ω (1 MΩ)", tolerance: "0.25", colorSample: "#0000FF" },
    { colorName: "Violet", digit: 7, multiplier: "10<sup>7</sup> Ω (10 MΩ)", tolerance: "0.1", colorSample: "#8A2BE2" },
    { colorName: "Gray", digit: 8, multiplier: "10<sup>8</sup> Ω (100 MΩ)", tolerance: "0.05", colorSample: "#808080" },
    { colorName: "White", digit: 9, multiplier: "10<sup>9</sup> Ω (1 GΩ)", tolerance: "", colorSample: "#D3D3D3" },
    { colorName: "Gold", digit: "", multiplier: "10<sup>-1</sup> Ω", tolerance: "5", colorSample: "#FFD700" },
    { colorName: "Silver", digit: "", multiplier: "10<sup>-2</sup> Ω", tolerance: "10", colorSample: "#C0C0C0" },
    { colorName: "No Color", digit: "", multiplier: "", tolerance: "20", colorSample: "transparent" },
  ];

  return (
    <div className="w-full max-w-7xl border-2 border-green-600 overflow-x-auto">
    
        <table className="table-auto w-full min-w-max border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">Color</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-200">Digit</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-200">Multiplier</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-200">Tolerance %</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-200">Color Band</th>
            </tr>
          </thead>
          <tbody>
            {resistorData.map((data, index) => (
              <tr key={index}>
                <td className="border bg-gray-300 border-gray-400 px-4 py-2">{data.colorName}</td>
                <td className="border border-gray-400 px-4 py-2">{data.digit}</td>
                <td
                  className="border border-gray-400 px-4 py-2"
                  dangerouslySetInnerHTML={{ __html: data.multiplier }}
                />
                <td className="border border-gray-400 px-4 py-2">{data.tolerance}</td>
                <td className="border border-gray-400 px-4 py-2">
                  <span
                    className="inline-block w-28 h-6 rounded-xl"
                    style={{ backgroundColor: data.colorSample }}
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
    </div>
  );
};

export default ResistorColorCodes;
