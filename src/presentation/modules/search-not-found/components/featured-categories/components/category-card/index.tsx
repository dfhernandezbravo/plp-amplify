import { Item, ShapeTypes } from '@entities/cms';
import { Card, CardTitle, ImageCardContainer, ImageIcon } from './style';
import useRedirectLink from '@hooks/use-redirect-link';

interface Props {
  item: Item;
  shape: ShapeTypes;
}

const CategoryCard: React.FC<Props> = ({ shape, item }) => {
  const { redirect } = useRedirectLink();

  return (
    <Card shape={shape} href={redirect(item.link)}>
      <ImageCardContainer shape={shape}>
        <ImageIcon
          src={item.image!}
          width={0}
          height={0}
          sizes="100vh"
          alt={item.title!}
        />
      </ImageCardContainer>
      <CardTitle>
        <span>{item.title}</span>
      </CardTitle>
    </Card>
  );
};

export default CategoryCard;
