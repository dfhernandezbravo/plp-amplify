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
import FacetsTags from '../../facets-tags';

const FacetsHeaderDesktop = () => {
  const { clearText } = useTransformText();
  const { recordsFiltered, facets } = useAppSelector((state) => state.products);
  const { query } = useRouter();
  const { department, category, product } = query as PlpQueryParams;

  const title =
    facets
      ?.find((facet) => facet.key === 'productclusternames')
      ?.values?.map((facetValue) => facetValue.name)
      ?.join(' - ') || '';

  return (
    <HeaderContainer>
      <TitleHeader>
        {product ? clearText(product) : clearText(category)}
      </TitleHeader>

      <TextBreadcrumb>
        {(department || category) && (
          <>
            {clearText(department)} • {clearText(category)}
          </>
        )}
        {product && <> • {clearText(product)}</>}
        {title && <>{title}</>}
      </TextBreadcrumb>

      <TextRecords>{recordsFiltered} productos encontrados</TextRecords>

      <FacetsTags />
    </HeaderContainer>
  );
};

export default FacetsHeaderDesktop;
