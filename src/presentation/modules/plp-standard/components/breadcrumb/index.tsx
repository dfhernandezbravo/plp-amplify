import { Breadcrumbs, useBreadcrumbs } from '@cencosud-ds/easy-design-system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles.module.css';

const getUrl = (path: string) => {
  const url = path.split('?');
  if (url.length > 1) {
    return decodeURIComponent(url[0].replace('/', ''));
  }
  return decodeURIComponent(path.replace('/', ''));
};

const BreadcrumbPLP = () => {
  const { asPath } = useRouter();
  const { links } = useBreadcrumbs({
    url: decodeURIComponent(getUrl(asPath)),
  });
  console.log(links);
  return (
    <div className={styles.breadcrumb}>
      <Breadcrumbs>
        {links.map((link) => (
          <Link
            href={link.href === '/search' ? '/' : link.href}
            key={link.href}
          >
            {link.text === 'search' ? 'Inicio' : link.text}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbPLP;
