import useTransformText from '@hooks/use-transform-text';
import PlpQueryParams from '@entities/plp-query-params';
import PLPContext from '@presentation/context/plp-context';
import { useRouter } from 'next/router';
import { Fragment, useContext } from 'react';
import FacetsTags from '../../facets-tags';
import {
  HeaderContainer,
  TextBreadcrumb,
  TextRecords,
  TitleHeader,
} from './styles';
import { useAppSelector } from '@store/hooks';
import { TagsStruct } from '@store/slices/filters/filter.types';

const FacetsHeaderDesktop = () => {
  const { clearText } = useTransformText();
  const { recordsFiltered, facets } = useContext(PLPContext);
  const { query } = useRouter();
  const { tags } = useAppSelector((state) => state.filters);
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
      {tags?.length > 0 && (
        <TitleHeader style={{ fontSize: '0.75rem' }}>
          {tags?.map((t: TagsStruct, i: number) => (
            <Fragment key={t.key}>
              {i > 0 && '-'} {t.label}{' '}
            </Fragment>
          ))}
          <Fragment> / Easy</Fragment>
        </TitleHeader>
      )}

      <TextRecords>{recordsFiltered} productos encontrados</TextRecords>

      <FacetsTags />
    </HeaderContainer>
  );
};

export default FacetsHeaderDesktop;
