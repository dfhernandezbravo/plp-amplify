import { Content } from '@entities/cms';
import useCMSDateValidator from '@hooks/cmsDateValidator/cmsDateValidator';
import getContentViewCms from '@use-cases/cms/get-content-view';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { useQuery } from 'react-query';
import ContentComponent from './components';
import styles from './styles.module.css';

interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}

const PLPStandardContainer = () => {
  const router = useRouter();
  const { category } = router.query as PageUrlQuery;
  const { cmsDateValidator } = useCMSDateValidator();

  const { data: contentCMS, isLoading } = useQuery(
    ['get-content-cms', category],
    () => getContentViewCms(category),
    {
      enabled: !!category,
    },
  );

  const ComponentRender = (element: Content) => {
    const { isActive, endDate, startDate, component } = element;
    const enabled = cmsDateValidator({ endDate, startDate, isActive });
    const Component = ContentComponent[component];
    if (!Component) return null;

    return Element ? enabled ? <Component {...element} /> : null : null;
  };

  if (isLoading) return <div>Loading</div>;

  if (!contentCMS) return <div>Plp Not found</div>;

  return (
    <div className={styles.container}>
      {contentCMS.map((element, index) => (
        <ComponentRender {...element} key={`${element.component}-${index}`} />
      ))}
    </div>
  );
};

export default PLPStandardContainer;
