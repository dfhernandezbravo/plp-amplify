import ThemeProvider from '@components/atoms/theme-provider';
import type { AppProps } from 'next/app';
import './style.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
