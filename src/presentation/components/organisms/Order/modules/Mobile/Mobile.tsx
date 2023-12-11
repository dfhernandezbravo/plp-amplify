import { useEffect, useRef, useState } from 'react';

// Components
import Display, { Layout } from '@components/molecules/Display';
import ButtonBox, { Event } from '@components/organisms/ButtonBox';

// Styled components
import { Container, TextArea, DisplayArea, ButtonBoxContainer } from './styles';

// Definitions
import { Props } from '../../types';

const Mobile = (props: Props) => {
  // Props
  const { count, title, queryParams, isShowButtonBox = true, onChange } = props;

  // Refs
  const buttonBoxRef = useRef<HTMLDivElement>(null);

  // State
  const [countText, setCountText] = useState('Productos no encontrados');

  // Methods
  const onDisplayChange = (layout: Layout) => onChange({ layout });
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
      if (buttonBoxPosition && window.scrollY > buttonBoxPosition) {
        buttonBoxRef?.current?.classList.add('fixed');
      } else {
        buttonBoxRef?.current?.classList.remove('fixed');
      }
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
        </ButtonBoxContainer>
      )}
    </Container>
  );
};

export default Mobile;
