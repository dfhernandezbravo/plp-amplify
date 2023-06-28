import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  SelectContainer,
  OrderByContainer,
  TextOrderBy,
  DropdownContainer,
  SelectOption
} from './OrderBy.styles';

const SelectComponent = ({ options }: any) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const optionsRef = useRef<HTMLDivElement | null>(null);

  const handleSelectOption = (event: any, optionValue: any) => {
    event.stopPropagation()
    setSelectedOption(optionValue);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    console.log('toggle')
    console.log({isDropdownOpen})
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
      <TextOrderBy className='option-selected'>
        Ordenar por:
      </TextOrderBy>
      <DropdownContainer onClick={toggleDropdown} ref={optionsRef}>
        <button>
          <span >{selectedOption ? selectedOption : 'Select an option'}</span>
          <span>
            <Image
              src={`/images/icons/${isDropdownOpen ? 'chevron-up' : 'chevron-down'}.svg`}
              alt={`chevron ${isDropdownOpen ? 'up' : 'down'}`}
              width={20}
              height={20}
            />
          </span>
        </button>

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
      </DropdownContainer>
    </OrderByContainer>

  );
};




export default SelectComponent;