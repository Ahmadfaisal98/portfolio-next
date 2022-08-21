import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useStateContext } from '../context/StateContext';
import { motion } from 'framer-motion';

const Header = () => {
  const ref = useRef<HTMLInputElement>(null);
  const refToggle = useRef<HTMLInputElement>(null);
  const { setIsNavbarActive, isNavbarActive } = useStateContext();

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
      document.querySelector('.main')?.classList.remove('hidden');
      document.querySelector('.home-section')?.classList.add('active');

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

  useEffect(() => {
    const handleClickOutside = (evt: any) => {
      if (
        ref.current &&
        !ref.current.contains(evt.target) &&
        refToggle.current &&
        !refToggle.current.contains(evt.target)
      ) {
        setIsNavbarActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      {/* <!-- Page Loader Start --> */}
      <div className='page-loader'>
        <div />
        <div />
        <div />
      </div>
      {/* <!-- Page Loader End --> */}

      {/* <!-- Background Circles Start --> */}
      <div className='bg-circles'>
        <div className='circle-1' />
        <div className='circle-2' />
        <div className='circle-3' />
        <div className='circle-4' />
      </div>

      {/* <!-- Background Circles End --> */}

      {/* <!-- Overlay Start --> */}
      <div className='overlay' />
      {/* <!-- Overlay End --> */}

      {/* <!-- Main Start --> */}
      <div className='main hidden'>
        {/* <!-- Header Start --> */}
        <header className={`header ${isNavbarActive ? 'active' : ''}`}>
          <div className='container'>
            <div className='row flex-end'>
              <div
                className='nav-toggler'
                onClick={() => {
                  setIsNavbarActive(!isNavbarActive);
                }}
                ref={refToggle}
              >
                <span />
              </div>
              <nav className='nav'>
                <div className='nav-inner' ref={ref}>
                  <ul>
                    <li>
                      <Link href='/'>
                        <a
                          className='nav-item link-item'
                          onClick={() => {
                            setIsNavbarActive(!isNavbarActive);
                          }}
                        >
                          home
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/about'>
                        <a
                          className='nav-item link-item'
                          onClick={() => {
                            setIsNavbarActive(!isNavbarActive);
                          }}
                        >
                          about
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/portfolio'>
                        <a
                          className='nav-item link-item'
                          onClick={() => {
                            setIsNavbarActive(!isNavbarActive);
                          }}
                        >
                          portfolio
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact'>
                        <a
                          className='nav-item link-item'
                          onClick={() => {
                            setIsNavbarActive(!isNavbarActive);
                          }}
                        >
                          contact
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* <!-- Header End --> */}
      </div>
    </motion.div>
  );
};

export default Header;
