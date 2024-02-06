import Desktop from './modules/Desktop';
import Mobile from './modules/Mobile';
import { Container } from './styles';
import { Props } from './types';
import { Layout } from '@cencosud-ds/easy-design-system';

const Order = (props: Props) => {
  const {
    count,
    title,
    queryParams,
    isShowButtonBox,
    onChange,
    onDisplayChange,
    onFilterChange,
    onBlur,
  } = props;

  return (
    <Container>
      <Layout is={['Desktop']}>
        <Desktop
          onChange={onChange}
          queryParams={queryParams}
          onDisplayChange={onDisplayChange}
          onFilterChange={onFilterChange}
        />
      </Layout>
      <Layout is={['Tablet', 'Phone']}>
        <Mobile
          count={count}
          title={title}
          onChange={onChange}
          isShowButtonBox={isShowButtonBox}
          queryParams={queryParams}
          onDisplayChange={onDisplayChange}
          onFilterChange={onFilterChange}
          onBlur={onBlur}
        />
      </Layout>
    </Container>
  );
};

export default Order;
