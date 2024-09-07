import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const handleToggleOpen = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    // in the second div below, the value?.label checks whether the value object is defined or not, and returns undefined if not.
    // Combined with the boolean operator ||, this will then return the 'Select...' string.  If value is defined, it will return the label property
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleToggleOpen}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
