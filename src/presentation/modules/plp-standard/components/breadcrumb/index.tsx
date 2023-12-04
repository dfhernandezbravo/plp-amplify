import { useDevice } from '@cencosud-ds/easy-design-system';
import Breadcrumb from '@components/molecules/Breadcrumb/Breadcrumb';
import { Link } from '@components/molecules/Breadcrumb/types';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import styles from '../../styles.module.css';

interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}

const BreadcrumbCMS = () => {
  const { device } = useDevice();
  const { query } = useRouter();
  const { department, category, product } = query as PageUrlQuery;

  const getLinks = (): Link[] => {
    const links: Link[] = [];
    const regex = /-/g;

    links.push({
      text: department.replace(regex, ' '),
      url: department,
    });

    links.push({
      text: category.replace(regex, ' '),
      url: `${department}/${category}`,
    });

    if (product) {
      links.push({
        text: product.replace(regex, ' '),
        url: `${department}/${category}/${product}`,
      });
    }

    return links;
  };

  return (
    <div className={styles.breadcrumb}>
      <Breadcrumb mobile={device === 'Phone'} links={getLinks()} />
    </div>
  );
};

export default BreadcrumbCMS;
