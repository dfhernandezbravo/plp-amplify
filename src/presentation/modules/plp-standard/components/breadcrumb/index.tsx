import { Breadcrumbs, useBreadcrumbs } from '@cencosud-ds/easy-design-system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles.module.css';

const BreadcrumbPLP = () => {
  const { asPath } = useRouter();
  const { links } = useBreadcrumbs({
    url: asPath.replace('/', ''),
  });

  return (
    <div className={styles.breadcrumb}>
      <Breadcrumbs>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.text}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbPLP;
