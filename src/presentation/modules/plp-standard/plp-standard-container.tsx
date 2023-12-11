import { Content } from '@entities/cms';
import useCMSDateValidator from '@hooks/cmsDateValidator/cmsDateValidator';
import getContentViewCms from '@use-cases/cms/get-content-view';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { useQuery } from 'react-query';
import ContentComponent from './components';
import { useDevice } from '@cencosud-ds/easy-design-system';
import Mobile from './modules/Mobile';
import Desktop from './modules/Desktop';

interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}
interface ContentRenderProps {
  content: Content[];
}

const PLPStandardContainer = () => {
  const router = useRouter();
  const { device } = useDevice();

  const { category } = router.query as PageUrlQuery;
  const { cmsDateValidator } = useCMSDateValidator();

  const { data: contentCMS, isLoading } = useQuery(
    ['get-content-cms', category],
    () => getContentViewCms(category),
    {
      enabled: !!category,
    },
  );

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

  if (isLoading) return <div>Loading</div>;

  if (!contentCMS) return <div>Plp Not found</div>;

  return (
    <div>
      {device === 'Phone' ? (
        <Mobile>
          <ContentRender content={contentCMS} />
        </Mobile>
      ) : (
        <Desktop>
          <ContentRender content={contentCMS} />
        </Desktop>
      )}
    </div>
  );
};

export default PLPStandardContainer;
