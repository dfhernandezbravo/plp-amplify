import React, { useState, ReactNode } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
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
      <HeaderAccordion onClick={toggle}>
        {title}
        {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </HeaderAccordion>
      {isOpen && <div>{children}</div>}
    </AccordionContainer>
  );
};

export default Accordion;
