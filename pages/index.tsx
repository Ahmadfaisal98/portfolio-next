import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profileHome from '../img/profile/Ahmad_Faisal_-_crop-removebg-preview (1).png';
import { useStateContext } from '../context/StateContext';

const Home: NextPage = () => {
  const router = useRouter();
  const [active, setActive] = useState('');
  const { isNavbarActive } = useStateContext();

  useEffect(() => {
    if (router.pathname === '/' && !isNavbarActive) {
      setActive('active');
    } else {
      setActive('fade-out');
    }
  }, [router, isNavbarActive]);

  return (
    <div>
      <Head>
        <title>Achmad Faisal</title>
        <meta content='Portfolio Ahmad Faisal' name='description' />
        <link href='/Ahmad Faisal - Bg Hijau.png' rel='icon' />
      </Head>

      <section
        className={`home-section align-items-center ${active}`}
        id='home'
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='home-text'>
              <p>{`Hello, I'm`}</p>
              <h1>Achmad Faisal</h1>
              <h2>Full Stack Developer</h2>
              <Link href='/about'>
                <a className='btn link-item' href='#about'>
                  more about me
                </a>
              </Link>
              <Link href='/portfolio'>
                <a className='btn link-item' href='#portfolio'>
                  portfolio
                </a>
              </Link>
            </div>
            <div className='home-img'>
              <div className='img-box'>
                <Image
                  alt='profile'
                  layout='responsive'
                  priority
                  src={profileHome}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
