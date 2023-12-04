import type { AppProps } from 'next/app';
// import '../presentation/styles/global.css';

import './style.css';
import { ThemeProviderEasy } from '@cencosud-ds/easy-design-system';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderEasy>
      <Component {...pageProps} />
    </ThemeProviderEasy>
  );
}
