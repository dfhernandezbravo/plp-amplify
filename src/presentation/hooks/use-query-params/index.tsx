import { useRouter } from 'next/router';

type NewQueryParam = {
  [x: string]: string | undefined;
};

export default function useQueryParams() {
  const router = useRouter();

  const updateQueryParams = (newQueryParam: NewQueryParam) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query, ...newQueryParam };
    router.push(
      {
        pathname: currentPath,
        query: currentQuery,
      },
      undefined,
      { shallow: true },
    );
  };

  return {
    updateQueryParams,
  };
}
