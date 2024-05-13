import PlpQueryParams from '@entities/plp-query-params';
import React, { useEffect } from 'react';
import useFilters from '../../hooks/use-filters';
import { useRouter } from 'next/router';
import { TagFacets } from '@entities/product/facets.entity';
import useQueryParams from '@hooks/use-query-params';
import {
  Container,
  FacetsTagsHeader,
  Tag,
  TagClose,
  TagsContainer,
  TagText,
} from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { setTags } from '@store/slices/filters';
import { useAppDispatch } from '@store/hooks';
import Button from '@components/atoms/Button';
const { format } = require('number-currency-format-2');

const FacetsTags = () => {
  const { query } = useRouter();
  const { filter } = query as PlpQueryParams;
  const { removeFilter } = useFilters(filter || '');
  const { updateQueryParams } = useQueryParams();
  const dispatch = useAppDispatch();

  const [itemsTags, setItemsTags] = React.useState<TagFacets[]>([]);

  const handleOnClickRemove = (value: TagFacets) => {
    const newFilter = `${value.key}/${value.value}`;
    removeFilter(newFilter);
  };
  const handleOnClickRemoveAll = () => {
    updateQueryParams({ filter: '', page: '1' });
  };
  const formatFilter = (str: string) =>
    str?.replaceAll('-', ' ').toLocaleLowerCase();

  const formatPrices = (prices: string) => {
    const splitNumber = prices.split(':');

    // Formatear cada número
    const number1 = format(splitNumber[0], {
      thousandSeparator: '.',
      decimalSeparator: ',',
      showDecimals: 'IF_NEEDED',
    });
    const number2 = format(splitNumber[1], {
      thousandSeparator: '.',
      decimalSeparator: ',',
      showDecimals: 'IF_NEEDED',
    });

    return `$${number1} - $${number2}`;
  };

  useEffect(() => {
    const items = filter?.split('/').filter((item) => item !== '');
    const result = [];

    if (items?.length) {
      for (let i = 0; i < items.length; i += 2) {
        if (!items[i + 1]) continue;
        if (items[i] === 'price') {
          result.push({
            key: items[i],
            value: items[i + 1],
            label: formatPrices(items[i + 1]),
          } as TagFacets);
        } else {
          result.push({
            key: items[i],
            value: items[i + 1],
            label: formatFilter(items[i + 1]),
          } as TagFacets);
        }
      }
    }
    setItemsTags(result);
    dispatch(
      setTags(
        result?.filter((r) => r.key !== 'color-bucket' && r.key !== 'price'),
      ),
    );
  }, []);

  return (
    <>
      <Container>
        <FacetsTagsHeader>Has seleccionado:</FacetsTagsHeader>
        <Button
          variant="link"
          type="button"
          onClick={handleOnClickRemoveAll}
          label="Borrar todo"
          style={{
            color: '#1a1a1a',
            fontSize: '14px',
            fontWeight: '600',
            width: 'fit-content',
          }}
        />
      </Container>
      <TagsContainer>
        {itemsTags &&
          itemsTags.map((item: TagFacets, index) => (
            <Tag
              data-id={`facet-tag-${item.label}`}
              key={`${index}_${item.value}`}
            >
              <TagText>{item.label}</TagText>
              <TagClose>
                <AiOutlineClose
                  size={16}
                  onClick={() => handleOnClickRemove(item)}
                />
              </TagClose>
            </Tag>
          ))}
      </TagsContainer>
    </>
  );
};

export default FacetsTags;
