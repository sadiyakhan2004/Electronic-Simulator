import React, { useState } from "react";

interface RadioProps {
  options: string[];
  onChange?: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({ options, onChange }) => {
  const getSelectedValue = (): string => {
    return options[0]; // Default to first option
  };

  const [selected, setSelected] = useState(getSelectedValue());

  const handleChange = (option: string) => {
    setSelected(option);
    if (onChange) {
      onChange(option);
    }
  };

  const getSelectedOption = (): string => {
    return selected;
  };

  return (
    <div className="inline-block">
      <div className="flex relative bg-white shadow-[0_0_1px_0_rgba(24,94,224,0.15),0_6px_12px_0_rgba(24,94,224,0.15)] p-1 rounded-full">
        {options.map((option, index) => (
          <React.Fragment key={option}>
            <input
              type="radio"
              id={`radio-${index + 1}`}
              name="tabs"
              checked={selected === option}
              onChange={() => handleChange(option)}
              className="hidden"
            />
            <label
              className={`flex items-center justify-center z-[2] h-[30px] w-[50px] text-xs font-medium rounded-full cursor-pointer transition-colors duration-150 ease-in ${
                selected === option ? "text-[#185ee0]" : "text-black"
              }`}
              htmlFor={`radio-${index + 1}`}
            >
              {option}
            </label>
          </React.Fragment>
        ))}
        <span
          className="absolute flex h-[30px] w-[50px] bg-[#e6eef9] z-[1] rounded-full transition-transform duration-250 ease-out"
          style={{
            transform: `translateX(${options.indexOf(selected) * 100}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Radio;
