interface Props {
  count?: string;
}

const useGetCountItems = () => {
  const COUNT_DEFAULT = '20';

  const getCountItems = ({ count }: Props) => {
    return (
      count || process.env.NEXT_PUBLIC_MAX_COUNT_PRODUCTS_PLP || COUNT_DEFAULT
    );
  };

  return { getCountItems };
};

export default useGetCountItems;
