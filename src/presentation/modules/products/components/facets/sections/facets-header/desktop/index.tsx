import useTransformText from '@hooks/use-transform-text';
import PlpQueryParams from '@entities/plp-query-params';
import PLPContext from '@presentation/context/plp-context';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import FacetsTags from '../../facets-tags';
import {
  HeaderContainer,
  TextBreadcrumb,
  TextRecords,
  TitleHeader,
} from './styles';

const FacetsHeaderDesktop = () => {
  const { clearText } = useTransformText();
  const { recordsFiltered, facets } = useContext(PLPContext);
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
