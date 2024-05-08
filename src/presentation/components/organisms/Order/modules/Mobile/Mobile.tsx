import { useEffect, useRef, useState } from 'react';

// Components
import Display from '@components/molecules/Display';
import ButtonBox, { Event } from '@components/organisms/ButtonBox';
import { LogisticButtonBox } from '@components/organisms/LogisticButtonBox/LogisticButtonBox';

// Styled components
import {
  Container,
  TextArea,
  DisplayArea,
  ButtonBoxContainer,
  BottomSheetPositionStyles,
  RadioButtonContainer,
  SortByTitle,
} from './styles';

// Definitions
import { Props } from '../../types';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { OrderOptions } from '@components/molecules/Filter';
import BottomSheet from '@components/atoms/bottom-sheet';
import { setOpenOrderMobile } from '@store/slices/products';
import { options as sortByOptions } from '@components/molecules/Filter/constants';
import RadioButton from '@components/atoms/radio-button';

const Mobile = (props: Props) => {
  const dispatch = useAppDispatch();
  const { isOpenOrderMobile, sort } = useAppSelector((state) => state.products);

  // Props
  const {
    count,
    title,
    queryParams,
    isShowButtonBox = true,
    onChange,
    onFilterChange,
    onDisplayChange,
  } = props;

  const [selectedSortOption, setSelectedSortOption] = useState(
    sort || sortByOptions[0].value,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedSortOption(value);
    onFilterChange(value as OrderOptions);
    dispatch(setOpenOrderMobile(false));
  };
  // Refs
  const buttonBoxRef = useRef<HTMLDivElement>(null);

  // State
  const [countText, setCountText] = useState('Productos no encontrados');
  const lastScrollPosition = useRef(0);

  // Methods
  // const onDisplayChange = (layout: LayoutOptions) => onChange({ layout });
  const onButtonBoxClick = (event: Event) => onChange({ event });
  const calculateCountText = (count?: number) => {
    if (!count) setCountText('Productos no encontrados');
    else if (count === 1) setCountText('1 Producto encontrado');
    else setCountText(`${count} Productos encontrados`);
  };

  // Update count text when count changes
  useEffect(() => {
    calculateCountText(count);
  }, [count]);

  // Set position fixed when scroll is lower than buttonBox position
  useEffect(() => {
    const buttonBoxPosition = buttonBoxRef?.current?.offsetTop;

    const onScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (buttonBoxPosition && currentScrollPosition > buttonBoxPosition) {
        buttonBoxRef?.current?.classList.add('fixed');
      } else {
        buttonBoxRef?.current?.classList.remove('fixed');
      }

      if (currentScrollPosition > lastScrollPosition?.current) {
        buttonBoxRef?.current?.classList.remove('fixed-header');
      } else if (currentScrollPosition < lastScrollPosition?.current) {
        buttonBoxRef?.current?.classList.add('fixed-header');
      }
      lastScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Container>
      <TextArea>
        <strong>{title}</strong>
        <span>{countText}</span>
      </TextArea>
      <DisplayArea>
        <Display
          isShowText={false}
          onChange={onDisplayChange}
          defaultValue={queryParams?.layout}
        />
      </DisplayArea>
      {isShowButtonBox && (
        <ButtonBoxContainer ref={buttonBoxRef}>
          <ButtonBox area="buttons" onClick={onButtonBoxClick} />
          <LogisticButtonBox />
        </ButtonBoxContainer>
      )}
      <BottomSheet
        open={isOpenOrderMobile}
        onClose={() => dispatch(setOpenOrderMobile(false))}
      >
        <SortByTitle>Ordenar por:</SortByTitle>
        {sortByOptions.map(({ value, label }) => (
          <RadioButtonContainer key={value}>
            <RadioButton
              value={value}
              label={label}
              inputId={value}
              checked={selectedSortOption === value}
              onChange={handleChange}
            />
          </RadioButtonContainer>
        ))}
      </BottomSheet>
      {isOpenOrderMobile && <BottomSheetPositionStyles />}
    </Container>
  );
};

export default Mobile;
