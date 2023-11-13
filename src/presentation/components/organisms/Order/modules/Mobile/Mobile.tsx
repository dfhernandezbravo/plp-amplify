import { useEffect, useState } from 'react';

// Components
import Display, { Layout } from '@components/molecules/Display';
import ButtonBox, { Event } from '@components/organisms/ButtonBox';

// Styled components
import { Container, TextArea, DisplayArea } from './styles';

// Definitions
import { Props } from '../../types';

const Mobile = (props: Props) => {
  // Props
  const { count, title, queryParams, isShowButtonBox = true, onChange } = props;

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

  // Effects
  useEffect(() => {
    calculateCountText(count);
  }, [count]);

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
        <ButtonBox area="buttons" onClick={onButtonBoxClick} />
      )}
    </Container>
  );
};

export default Mobile;
