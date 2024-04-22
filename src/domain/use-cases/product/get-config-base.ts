import { Content } from '@entities/cms';

const CONFIG_COMPONENT = 'config-base-plp';

export const getConfigBase = (contentCMS: Content[]) => {
  const configComponent = contentCMS.find(
    (item) => item.component === CONFIG_COMPONENT,
  );

  if (!configComponent) return null;

  return {
    clusterId: configComponent.clusterId || '',
    enableMobileFacetsComponent: Boolean(
      configComponent.enableMobileFacetsComponent,
    ),
    enableDesktopFacetsComponent: Boolean(
      configComponent.enableDesktopFacetsComponent,
    ),
    enableBreadcrumbsComponent: Boolean(
      configComponent.enableBreadcrumbsComponent,
    ),
    enableOrderComponent: Boolean(configComponent.enableOrderComponent),
    enableProductsComponent: Boolean(configComponent.enableProductsComponent),
  };
};
