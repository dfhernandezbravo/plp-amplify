// Definitions
import { Props } from './types';

// Styled components
import { Container } from './styles';

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
