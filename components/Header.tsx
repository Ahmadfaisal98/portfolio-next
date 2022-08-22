import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useStateContext } from '../context/StateContext';
import { motion } from 'framer-motion';

const Header = () => {
  const ref = useRef<HTMLInputElement>(null);
  const refToggle = useRef<HTMLInputElement>(null);
  const { setIsNavbarActive, isNavbarActive, isOpenPopup } = useStateContext();

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
      <div className='main'>
        {/* <!-- Header Start --> */}
        <header className={`header ${isNavbarActive ? 'active' : ''}`}>
          <div className='container'>
            <div className='row flex-end'>
              <div
                className={`nav-toggler ${isOpenPopup ? 'hidden' : ''}`}
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
