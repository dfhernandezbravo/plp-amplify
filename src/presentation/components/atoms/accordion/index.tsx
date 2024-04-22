import React, { ReactNode, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { AccordionContainer, HeaderAccordion } from './styles';

type AccordionProps = {
  title: string;
  children: ReactNode;
  isBeginOpen: boolean;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isBeginOpen,
}) => {
  const [isOpen, setIsOpen] = useState(isBeginOpen);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <AccordionContainer>
      <HeaderAccordion
        data-id={`facet-group-${title.toLowerCase()}`}
        onClick={toggle}
      >
        {title}
        {isOpen ? (
          <MdKeyboardArrowUp size={25} />
        ) : (
          <MdKeyboardArrowDown size={25} />
        )}
      </HeaderAccordion>
      {isOpen && <div>{children}</div>}
    </AccordionContainer>
  );
};

export default Accordion;
