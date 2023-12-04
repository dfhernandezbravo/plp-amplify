import BreadcrumbDesktop from './modules/Breadcrumb.desktop';
import BreadcrumbMobile from './modules/Breadcrumb.mobile';
import { Container } from './styles';
import { Props } from './types';

const Breadcrumb = (props: Props) => {
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
