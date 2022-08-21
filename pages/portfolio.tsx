import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Popup from '../components/Popup';
import { useStateContext } from '../context/StateContext';
import { dataPortfolio } from '../data/dataPortfolio';

const Portfolio = () => {
  const router = useRouter();
  const [active, setActive] = useState('');
  const [dataPopup, setDataPopup] = useState({});
  const { isNavbarActive, setIsOpenPopup, isOpenPopup } = useStateContext();

  useEffect(() => {
    if (router.pathname === '/portfolio' && !isNavbarActive && !isOpenPopup) {
      setActive('active');
    } else {
      setActive('fade-out');
    }
  }, [router, isNavbarActive, isOpenPopup]);

  return (
    <>
      <Head>
        <title>Achmad Faisal | Portfolio</title>
        <meta content='About Ahmad Faisal' name='description' />
        <link href='/Ahmad Faisal - Bg Hijau.png' rel='icon' />
      </Head>
      <section
        className={`portfolio-section sec-padding ${active}`}
        id='portfolio'
      >
        <div className='container'>
          <div className='row'>
            <div className='section-title'>
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className='row'>
            {dataPortfolio.map(
              ({ title, desc, image, technologies, view }, index) => (
                <div className='portfolio-item' key={index}>
                  <div className='portfolio-item-thumbnail'>
                    <Image alt='portfolio item thumb' src={image} />
                  </div>
                  <h3 className='portfolio-item-title'>{title}</h3>
                  <button
                    className='btn view-project-btn'
                    onClick={() => {
                      setIsOpenPopup(true);
                      setDataPopup({
                        title,
                        desc,
                        image,
                        technologies,
                        view,
                      });
                    }}
                    type='button'
                  >
                    view project
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <Popup {...dataPopup} />
    </>
  );
};

export default Portfolio;
