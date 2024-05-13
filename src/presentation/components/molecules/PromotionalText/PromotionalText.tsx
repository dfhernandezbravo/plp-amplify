// Components
import { useAppSelector } from '@store/hooks';
import HtmlText from '../../atoms/HtmlText';

// Styled components
import { Container, Title, Content } from './style';

// Definitions
import { Props } from './types';
import { TagsStruct } from '@store/slices/filters/filter.types';

const PromotionalText = (props: Props) => {
  // Props
  const { title, description } = props;
  const { tags } = useAppSelector((state) => state.filters);

  const formatDymanicTitle = (title: string) => {
    const repalceText = '{replaceTitleSeo}';
    if (tags?.length > 0) {
      const arrayTagsString: string[] = [];
      tags?.map((t: TagsStruct) => arrayTagsString.push(t.label));
      if (arrayTagsString?.length > 0) {
        return title.replace(repalceText, ', ' + arrayTagsString?.join(', '));
      }
      return title.replace(repalceText, '');
    } else {
      return title.replace(repalceText, '');
    }
  };

  return (
    <Container>
      {title && <Title>{formatDymanicTitle(title)}</Title>}
      <Content>
        <HtmlText>{description}</HtmlText>
      </Content>
    </Container>
  );
};

export default PromotionalText;
