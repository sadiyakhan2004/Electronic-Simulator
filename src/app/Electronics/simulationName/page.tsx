"use client";
import Question from "@/components/electronics/Question";
import ColorCodeTable from "@/components/electronics/ColorCodeTable";

function Page() {
  return (
    <div className="m-0 p-0 h-screen w-screen flex flex-col">
      {/* Heading - Centered and Green */}
      <h1 className="text-3xl text-green-600 font-semibold text-center py-2">
        Resistor Color Codes
      </h1>

      {/* Main Content - Split Screen */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-between px-4 md:px-8 border-2 border-top pt-2">
        {/* Left Side - Color Code Table */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center mb-4 md:mb-0">
          <ColorCodeTable />
        </div>

        {/* Right Side - Simulations */}
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center px-6 ">
          <Question />
        </div>
      </div>
    </div>
  );
}

export default Page;
