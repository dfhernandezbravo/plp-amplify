import type { AppProps } from 'next/app';
// import '../presentation/styles/global.css';

import './style.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
