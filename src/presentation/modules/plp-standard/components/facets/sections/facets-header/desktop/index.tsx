import useTransformText from '@hooks/use-transform-text';
import PlpQueryParams from '@modules/plp-standard/types/plp-query-params';
import { useAppSelector } from '@store/hooks';
import { useRouter } from 'next/router';
import {
  HeaderContainer,
  TextBreadcrumb,
  TextRecords,
  TitleHeader,
} from './styles';

const FacetsHeaderDesktop = () => {
  const { clearText } = useTransformText();
  const { recordsFiltered } = useAppSelector((state) => state.products);
  const { query } = useRouter();
  const { department, category, product } = query as PlpQueryParams;

  return (
    <HeaderContainer>
      <TitleHeader>
        {product ? clearText(product) : clearText(category)}
      </TitleHeader>

      <TextBreadcrumb>
        {clearText(department)} • {clearText(category)}
        {product && <> • {clearText(product)}</>}
      </TextBreadcrumb>

      <TextRecords>{recordsFiltered} productos encontrados</TextRecords>
    </HeaderContainer>
  );
};

export default FacetsHeaderDesktop;
