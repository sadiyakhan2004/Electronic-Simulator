import React from "react";

const Page: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-blue-100 to-gray-200 min-h-screen">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-xl border border-gray-300 box-border h-[90vh] overflow-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 font-poppins">
          Familiarisation with Resistor
        </h1>

        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4 font-poppins">
            Aim of the Experiment
          </h2>
          <p className="text-white text-lg mb-6 font-lora">
            By the end of this experiment, you will be able to:
          </p>

          <ul className="list-inside list-disc space-y-4 pl-6 text-white font-lora text-lg">
            <li className="hover:translate-x-2 hover:text-yellow-300 transition-all duration-300">
              🛠️ Explain the function and unit of Resistors
            </li>
            <li className="hover:translate-x-2 hover:text-yellow-300 transition-all duration-300">
              📏 Measure the value of a Resistor
            </li>
            <li className="hover:translate-x-2 hover:text-yellow-300 transition-all duration-300">
              ⚖️ Measure the Tolerance of a Resistor
            </li>
            <li className="hover:translate-x-2 hover:text-yellow-300 transition-all duration-300">
              🔬 Explain the types of Resistors
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 font-poppins">
            Additional Notes
          </h3>
          <p className="text-sm text-gray-500 font-lora">
            This experiment is designed to help students understand the
            fundamental concepts of resistors and how they are used in
            electrical circuits. You'll gain hands-on experience with measuring
            and categorizing resistors based on their specifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
