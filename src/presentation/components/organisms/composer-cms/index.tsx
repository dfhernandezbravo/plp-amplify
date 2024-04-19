import { Content } from '@entities/cms';
import { ComponentsCMS } from '@entities/cms/components-cms';
import useCMSDateValidator from '@hooks/cmsDateValidator';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import cmsContentSlice from '@store/slices/cmsContent';
import React from 'react';

interface Props {
  contentCMS: Content[];
  components: ComponentsCMS;
}

const ComposerCMS: React.FC<Props> = ({ contentCMS, components }) => {
  const { cmsDateValidator } = useCMSDateValidator();
  const { setCmsContent } = cmsContentSlice.actions;
  const { deviceType } = useAppSelector((state) => state.device);
  const dispatch = useAppDispatch();

  const isVisible = (element: Content) => {
    const { visibleMobile, visibleDesktop } = element;
    if (visibleMobile === undefined && visibleDesktop === undefined)
      return true;
    const visible =
      (deviceType !== 'desktop' && visibleMobile) ||
      (deviceType === 'desktop' && visibleDesktop);
    return visible;
  };

  const ComponentRender = (element: Content) => {
    const { isActive, endDate, startDate, component } = element;

    const enabled = cmsDateValidator({ endDate, startDate, isActive });

    const showElement = enabled && isVisible(element);
    const Component = components[component];
    dispatch(setCmsContent(contentCMS));
    if (!Component) return null;
    return showElement ? <Component {...element} /> : null;
  };

  return (
    <>
      {contentCMS.map((element, index) => (
        <ComponentRender {...element} key={`${element.component}-${index}`} />
      ))}
    </>
  );
};

export default ComposerCMS;
