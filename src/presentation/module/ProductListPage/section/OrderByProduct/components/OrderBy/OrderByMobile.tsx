import { useState, useEffect, useRef } from 'react';
import {
  SelectContainer,
  OrderByContainer,
  TextOrderBy,
  SelectOption
} from './OrderBy.styles';

const SelectComponentMobile = ({ options }: any) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const optionsRef = useRef<HTMLDivElement | null>(null);
  console.log(options)
  const handleSelectOption = (event: any, optionValue: any) => {
    event.stopPropagation()
    setSelectedOption(optionValue);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    console.log('toggle')
    console.log({ isDropdownOpen })
    setIsDropdownOpen(!isDropdownOpen);
  };


  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isDropdownOpen && optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });


  return (
    <OrderByContainer>
      <div>
        <TextOrderBy className='option-selected' onClick={toggleDropdown}>
          Ordenar por
        </TextOrderBy>
        {isDropdownOpen && (
          <SelectContainer >
            {options.map((option: any) => (
              <SelectOption
                key={option.label}
                className={`${selectedOption === option.label ? 'selected' : ''}`}
                onClick={(event: any) => handleSelectOption(event, option.label)}
              >
                {option.label}
              </SelectOption>
            ))}

          </SelectContainer>
        )}
      </div>
    </OrderByContainer>

  );
};




export default SelectComponentMobile;