import { useDevice } from '@cencosud-ds/easy-design-system';
import { Content } from '@entities/cms';
import useCMSDateValidator from '@hooks/cmsDateValidator';
import ContentComponent from '@modules/plp-standard/components';
import Desktop from '@modules/plp-standard/layouts/Desktop';
import Mobile from '@modules/plp-standard/layouts/Mobile';
import { PlpContainer } from '@modules/plp-standard/styles';

interface Props {
  contentCMS: Content[];
}

interface ContentRenderProps {
  content: Content[];
}

const PLPCMS = ({ contentCMS }: Props) => {
  const { cmsDateValidator } = useCMSDateValidator();
  const { device } = useDevice();

  const isVisible = (element: Content) => {
    const { visibleMobile, visibleDesktop } = element;
    if (visibleMobile === undefined && visibleDesktop === undefined)
      return true;
    const visible =
      (device !== 'Desktop' && visibleMobile) ||
      (device === 'Desktop' && visibleDesktop);
    return visible;
  };

  const ComponentRender = (element: Content) => {
    const { isActive, endDate, startDate, component } = element;
    const enabled = cmsDateValidator({ endDate, startDate, isActive });
    const showElement = enabled && isVisible(element);
    const Component = ContentComponent[component];
    if (!Component) return null;

    return Element ? showElement ? <Component {...element} /> : null : null;
  };

  const ContentRender = (props: ContentRenderProps) => {
    const { content } = props;
    return (
      <>
        {content.map((element, index) => (
          <ComponentRender {...element} key={`${element.component}-${index}`} />
        ))}
      </>
    );
  };

  return (
    <PlpContainer>
      {device === 'Phone' ? (
        <Mobile>
          <ContentRender content={contentCMS} />
        </Mobile>
      ) : (
        <Desktop>
          <ContentRender content={contentCMS} />
        </Desktop>
      )}
    </PlpContainer>
  );
};

export default PLPCMS;
