import type { AppProps } from 'next/app';
import Header from '../components/Header';
import '../styles/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const handler = () => {
      // Page loader
      document.querySelector('.page-loader')?.classList.add('fade-out');
      setTimeout(() => {
        const el = document.querySelector<HTMLElement>('.page-loader');
        if (el) {
          el.style.display = 'none';
        }
      }, 600);
    };
    if (document.readyState === 'complete') {
      handler();
    } else {
      window.addEventListener('load', handler);
      return () => document.removeEventListener('load', handler);
    }

    return () => {
      null;
    };
  });
  return (
    <StateContext>
      <Header />
      <Toaster />
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;
