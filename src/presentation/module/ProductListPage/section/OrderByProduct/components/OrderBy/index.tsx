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
  const [iconsEnabled, setIconsEnabled] = useState<any>({ gridView: false, listView: false })

  const optionsRef = useRef<HTMLDivElement | null>(null);

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
        <TextOrderBy className='option-selected'>
          Ordenar por:
        </TextOrderBy>
        <DropdownContainer onClick={toggleDropdown} ref={optionsRef}>
          <button>
            <span >{selectedOption ? selectedOption : 'Select an option'}</span>
            <span className='arrow-container'>
              <Image
                src={`/images/icons/${isDropdownOpen ? 'chevron-up' : 'chevron-down'}.svg`}
                alt={``}
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
      </div>

      
      <div>
        <p>Ver en: </p>
        <div>
          <div className='view-icons-container' onClick={() => setIconsEnabled({gridView:true, listView:false})}>
          <Image
            src={`/images/icons/${iconsEnabled.gridView ? 'grid-enabled' : 'grid-disabled'}.svg`}
            alt={''}
            width={20}
            height={20}
          />
          </div>
          <div className='view-icons-container' onClick={() => setIconsEnabled({gridView:false, listView:true})}>
          <Image
            src={`/images/icons/${iconsEnabled.listView ? 'list-enabled' : 'list-disabled'}.svg`}
            alt={''}
            width={20}
            height={20}
          />
          </div>
        </div>
      </div>
    </OrderByContainer>

  );
};




export default SelectComponent;