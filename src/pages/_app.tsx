import type { AppProps } from 'next/app';
import './style.css';
import { ThemeProvider } from '@cencosud-ds/easy-design-system';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
