// Definitions
import { Props } from './Breadcrumb.defs';

// Styled components
import { Container } from './Breadcrumb.style';

// Components
import BreadcrumbMobile from './modules/Breadcrumb.mobile';
import BreadcrumbDesktop from './modules/Breadcrumb.desktop';

const Breadcrumb = (props: Props) => {
  // Definitions
  const { links, mobile } = props;
  return (
    <Container>
      {mobile ? (
        <BreadcrumbMobile links={links} />
      ) : (
        <BreadcrumbDesktop links={links} />
      )}
    </Container>
  );
};

export default Breadcrumb;
