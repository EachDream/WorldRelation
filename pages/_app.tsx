import './globals.css';
import { ReactElement, ComponentType } from 'react';

interface AppProps {
  Component: ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
