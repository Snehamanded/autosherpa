
import React from 'react';

interface Option {
  id: string;
  text: string;
  value: string;
}

interface OptionButtonsProps {
  options: Option[];
  onSelect: (optionId: string, optionText: string) => void;
}

export const OptionButtons: React.FC<OptionButtonsProps> = ({ options, onSelect }) => {
  return (
    <div className="mt-3 space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id, option.text)}
          className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200 shadow-sm"
        >
          <span className="text-sm font-medium text-gray-800">{option.text}</span>
        </button>
      ))}
    </div>
  );
};
