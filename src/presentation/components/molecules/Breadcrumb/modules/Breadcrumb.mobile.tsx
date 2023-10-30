// Components
import Link from '../../../atoms/Link';

// Definitions
import { Props } from '../Breadcrumb.defs';

const BreadcrumbMobile = (props: Props) => {
  // Props
  const { links } = props;
  return (
    <>
      {links.length > 0 && (
        <>
          <Link url="/" target="_self">
            Inicio
          </Link>
          <span>{`>`}</span>
          <Link url={links[1].url} target="_self">
            {links[1].text}
          </Link>
        </>
      )}
    </>
  );
};

export default BreadcrumbMobile;
