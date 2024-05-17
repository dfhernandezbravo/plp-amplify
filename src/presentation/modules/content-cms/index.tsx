import ComposerCMS from '@components/organisms/composer-cms';
import PLPContext from '@presentation/context/plp-context';
import { useContext } from 'react';
import ContentComponent from './components';

const ContentCMS = () => {
  const { contentCMS } = useContext(PLPContext);

  if (!contentCMS) return null;

  return <ComposerCMS contentCMS={contentCMS} components={ContentComponent} />;
};

export default ContentCMS;
