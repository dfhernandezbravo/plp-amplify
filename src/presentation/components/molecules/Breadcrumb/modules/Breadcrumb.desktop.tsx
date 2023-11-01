// Components
import Link from '../../../atoms/Link';

// Definitions
import { Props } from '../types';

const BreadcrumbDesktop = (props: Props) => {
  // Props
  const { links } = props;
  return (
    <>
      {links.map((link, index) => {
        const { url, text } = link;
        return (
          <>
            {index === 0 && (
              <>
                <Link url="/" target="_self">
                  Inicio
                </Link>
              </>
            )}
            <span>{`>`}</span>
            <Link url={url} target="_self">
              {text}
            </Link>
          </>
        );
      })}
    </>
  );
};

export default BreadcrumbDesktop;
