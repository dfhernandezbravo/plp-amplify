import React, { useEffect, useState } from 'react';
import {
  ButtonsContainer,
  Page,
  PaginationContainer,
  PaginatorNav,
} from './styles';
import Icon from '@components/atoms/Icon';
import { animateScroll as scroll } from 'react-scroll';

interface Props {
  maxPagesCount: number;
  currentPage: number;
  pagesCount: number;
  setCurrentPage: (page: string) => void;
}

const ProductPagination = (props: Props) => {
  const { currentPage, maxPagesCount, pagesCount, setCurrentPage } = props;

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [startPage, setStartPage] = useState<number>(1);
  const [endPage, setEndPage] = useState<number>(maxPagesCount);

  const handlePageChange = (page: number) => {
    setCurrentPage(page.toString());
    scroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true,
    });
  };

  useEffect(() => {
    if (currentPage && maxPagesCount) {
      let startPage = 1;
      let endPage = pagesCount < maxPagesCount ? pagesCount : maxPagesCount;

      if (currentPage > 2) {
        startPage = currentPage - 2;
        endPage = currentPage + 2 > pagesCount ? pagesCount : currentPage + 2;
      }
      setStartPage(startPage);
      setEndPage(endPage);

      const pageNumbers = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      );
      setPageNumbers(pageNumbers);
    }
  }, [currentPage, maxPagesCount]);

  return (
    <PaginationContainer>
      <ButtonsContainer>
        {startPage > 1 && (
          <PaginatorNav onClick={() => handlePageChange(currentPage - 1)}>
            <Icon id="paginator-prev" name="paginator-prev"></Icon>
          </PaginatorNav>
        )}
        {pageNumbers &&
          pageNumbers.map((page: number) => (
            <Page
              key={page}
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              <span>{page}</span>
            </Page>
          ))}
        {endPage < pagesCount && (
          <PaginatorNav onClick={() => handlePageChange(currentPage + 1)}>
            <Icon id="paginator-next" name="paginator-next"></Icon>
          </PaginatorNav>
        )}
      </ButtonsContainer>
    </PaginationContainer>
  );
};

export default ProductPagination;
