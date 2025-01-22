import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import Radio from "../ui/Radio";
import Button from "../ui/Button";

interface AnswerBoxProps {
  actualResistance: string;
  actualUnit: string;
  actualTolerance: string;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({
  actualResistance,
  actualUnit,
  actualTolerance,
}) => {
  const [resistance, setResistance] = useState<string>("");
  const [unit, setUnit] = useState<string>("Ω");
  const [tolerance, setTolerance] = useState<string>("");
  const [ansChecked, setAnsChecked] = useState<boolean>(false);
  const [isCorrectResistance, setIsCorrectResistance] = useState<boolean | null>(null);
  const [isCorrectUnit, setIsCorrectUnit] = useState<boolean | null>(null);
  const [isCorrectTolerance, setIsCorrectTolerance] = useState<boolean | null>(null);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  useEffect(()=>{
    setAnsChecked(false);
    setShowAnswers(false);
    setResistance("");
    setUnit("");
    setTolerance("");
  }, [actualResistance, actualUnit, actualTolerance])

  const handleCheck = () => {
    
      setAnsChecked(true);
    
      // Normalize inputs by converting to numbers for comparison
      const userResistance = parseFloat(resistance.trim());
      const actualResistanceValue = parseFloat(actualResistance.trim());
      const userTolerance = parseFloat(tolerance.trim());
      const actualToleranceValue = parseFloat(actualTolerance.trim());
    
      const normalizedUnit = actualUnit.trim().toLowerCase();
      const normalizedUserUnit = unit.trim().toLowerCase();
    
      setIsCorrectResistance(userResistance === actualResistanceValue);
      setIsCorrectUnit(normalizedUserUnit === normalizedUnit);
      setIsCorrectTolerance(userTolerance === actualToleranceValue);
    
  };

  const handleShowAnswer = () => {
    if(ansChecked){
      setShowAnswers(true); // Set state to show the correct answers only if 'Check' was clicked
    }
    
  };

  return (
    <form className="w-full h-full max-w-full flex-grow px-6 mt-2">
      <h2 className="text-lg font-bold mb-4 text-gray-700">Resistance Calculator</h2>

      <div className="mb-4">
        <label htmlFor="resistance" className="block text-sm font-medium text-gray-600 mb-2">
          Enter the resistance value:
        </label>
        <Input
          label=""
          id="resistance"
          className="w-full"
          placeholder="e.g., 100"
          onChange={(e) => setResistance(e.target.value)}
          value={resistance}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Select the unit:</label>
        <Radio
          options={["Ω", "kΩ", "MΩ", "GΩ"]}
          onChange={(value) => setUnit(value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tolerance" className="block text-sm font-medium text-gray-600 mb-2">
          Enter the tolerance (%):
        </label>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">+/-</span>
          <Input
            label=""
            id="tolerance"
            className="w-full"
            placeholder="e.g., 5"
            value={tolerance}
            onChange={(e) => setTolerance(e.target.value)}
          />
          <span className="text-gray-700">%</span>
        </div>
      </div>

      {/* Flexbox layout for displaying correct/incorrect answers */}
      {ansChecked && (
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2 w-1/2">
            <div>
              {isCorrectResistance ? (
                <h3 className="text-green-500">Correct resistance value</h3>
              ) : (
                <h3 className="text-red-500">Incorrect resistance value</h3>
              )}
            </div>
            <div>
              {isCorrectUnit ? (
                <h3 className="text-green-500">Correct unit</h3>
              ) : (
                <h3 className="text-red-500">Incorrect unit</h3>
              )}
            </div>
            <div>
              {isCorrectTolerance ? (
                <h3 className="text-green-500">Correct tolerance</h3>
              ) : (
                <h3 className="text-red-500">Incorrect tolerance</h3>
              )}
            </div>
          </div>

          {/* Flexbox layout for showing correct answers */}
          {showAnswers && ansChecked && (
            <div className="flex flex-col space-y-2 w-1/2 text-right">
              <div>
                <h3 className="text-blue-500">Correct resistance value: {actualResistance}</h3>
              </div>
              <div>
                <h3 className="text-blue-500">Correct unit: {actualUnit}</h3>
              </div>
              <div>
                <h3 className="text-blue-500">Correct tolerance: {actualTolerance}%</h3>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between items-center mt-8">
        <Button
          variant="success"
          className="w-1/2 mr-2"
          onClick={(e) => {
            e.preventDefault();
            handleCheck();
          }}
        >
          Check
        </Button>
        <Button
          variant="warning"
          className="w-1/2 ml-2"
          onClick={(e) => {
            e.preventDefault();
            handleShowAnswer();
          }}
        >
          Show Answer
        </Button>
      </div>
    </form>
  );
};

export default AnswerBox;