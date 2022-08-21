import type { AppProps } from 'next/app';
import Header from '../components/Header';
import '../styles/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Header />
      <Toaster />
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;
