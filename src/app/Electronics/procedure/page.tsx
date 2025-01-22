import React from "react";

function Page() {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-blue-600 text-white p-4 text-center font-bold text-2xl">
          Procedure
        </header>
        <div className="p-6">
          <h1 className="text-2xl text-gray-600 font-semibold mb-4">Steps to Follow</h1>
          <ul className="list-decimal pl-6 space-y-2  text-gray-600 text-lg">
            <li>Enter the resistance value.</li>
            <li>Choose the Unit.</li>
            <li>Enter the Tolerance Value.</li>
            <li>Click the "Check" button to verify the result.</li>
            <li>Click the "Show" button to display the answer.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6">
          <h1 className="text-2xl  text-gray-600 font-semibold mb-4">Color Code Chart</h1>
          <table className="w-full table-auto border-collapse border border-gray-200 text-left text-gray-700">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Band</th>
                <th className="border border-gray-300 px-4 py-2">3 Band Resistor</th>
                <th className="border border-gray-300 px-4 py-2">4 Bands Resistor</th>
                <th className="border border-gray-300 px-4 py-2">5 Bands Resistor</th>
                <th className="border border-gray-300 px-4 py-2">6 Bands Resistor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-100 even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">1st Band</td>
                <td className="border border-gray-300 px-4 py-2">First Digit</td>
                <td className="border border-gray-300 px-4 py-2">First Digit</td>
                <td className="border border-gray-300 px-4 py-2">First Digit</td>
                <td className="border border-gray-300 px-4 py-2">First Digit</td>
              </tr>
              <tr className="odd:bg-gray-100 even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">2nd Band</td>
                <td className="border border-gray-300 px-4 py-2">Second Digit</td>
                <td className="border border-gray-300 px-4 py-2">Second Digit</td>
                <td className="border border-gray-300 px-4 py-2">Second Digit</td>
                <td className="border border-gray-300 px-4 py-2">Second Digit</td>
              </tr>
              <tr className="odd:bg-gray-100 even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">3rd Band</td>
                <td className="border border-gray-300 px-4 py-2">Multiplier Value</td>
                <td className="border border-gray-300 px-4 py-2">Multiplier Value</td>
                <td className="border border-gray-300 px-4 py-2">Third Digit</td>
                <td className="border border-gray-300 px-4 py-2">Third Digit</td>
              </tr>
              <tr className="odd:bg-gray-100 even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">4th Band</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Tolerance Value</td>
                <td className="border border-gray-300 px-4 py-2">Multiplier Value</td>
                <td className="border border-gray-300 px-4 py-2">Multiplier Value</td>
              </tr>
              <tr className="odd:bg-gray-100 even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">5th Band</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Tolerance Value</td>
                <td className="border border-gray-300 px-4 py-2">Tolerance Value</td>
              </tr>
              <tr className="odd:bg-gray-100 even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">6th Band</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Temperature Coefficient</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
