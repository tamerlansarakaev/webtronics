import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store/store';

// Styles
import '@/styles/globals.css';
import '@/styles/Button.scss';
import '@/styles/vars.scss';
import '../styles/Header.scss';
import '../styles/Main.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

