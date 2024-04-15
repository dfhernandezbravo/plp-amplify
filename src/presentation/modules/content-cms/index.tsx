import ComposerCMS from '@components/organisms/composer-cms';
import PLPContext from '@presentation/context/plp-context';
import { useContext } from 'react';
import ContentComponent from './components';

const ContentCMS = () => {
  const { isLoadingCMS, contentCMS } = useContext(PLPContext);

  if (isLoadingCMS) return <div>Loading....</div>;

  if (!contentCMS) return null;

  return <ComposerCMS contentCMS={contentCMS} components={ContentComponent} />;
};

export default ContentCMS;
