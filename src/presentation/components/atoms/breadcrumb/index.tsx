import { AiOutlineRight } from 'react-icons/ai';
import { BreadcrumbContainer, BreadcrumbItem } from './styles';
import { BreadcrumbLink } from './types';

interface Props {
  links: BreadcrumbLink[];
}

const regex = /-/g;

const BreadcrumbPLP: React.FC<Props> = ({ links }) => {
  return (
    <BreadcrumbContainer>
      {links.map((link, index, { length }) => (
        <>
          <BreadcrumbItem href={link.url} $isActive={link.isActive}>
            {link.label.replace(regex, ' ')}
          </BreadcrumbItem>
          {index + 1 !== length && <AiOutlineRight size={12} />}
        </>
      ))}
    </BreadcrumbContainer>
  );
};

export default BreadcrumbPLP;
