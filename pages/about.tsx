import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import profileAbout from '../img/profile/Ahmad_Faisal_-_tangan_silang_-_crop-removebg-preview.png';
import { useStateContext } from '../context/StateContext';
import Link from 'next/link';

const About = () => {
  const router = useRouter();
  const [active, setActive] = useState('');
  const { isNavbarActive } = useStateContext();

  useEffect(() => {
    if (router.pathname === '/about' && !isNavbarActive) {
      setActive('active');
    } else {
      setActive('fade-out');
    }
  }, [router, isNavbarActive]);

  return (
    <section className={`about-section sec-padding ${active}`} id='about'>
      <div className='container'>
        <div className='row'>
          <div className='section-title'>
            <h2>about me</h2>
          </div>
        </div>
        <div className='row'>
          <div className='about-img'>
            <div className='img-box'>
              <Image alt='about' src={profileAbout} />
            </div>
          </div>
          <div className='about-text'>
            <p>
              I’m a full stack developer, which i learned in hacktiv8 by getting
              honorary award. I also have experience in business management,
              marketing and customer relations more than a year. I have a
              passion to learn new things and enjoy what I am doing.
            </p>
            <h3>skills</h3>
            <div className='skills'>
              <div className='skill-item'>HTML</div>
              <div className='skill-item'>CSS</div>
              <div className='skill-item'>JavaScript</div>
              <div className='skill-item'>Typescript</div>
              <div className='skill-item'>React</div>
              <div className='skill-item'>Next js</div>
              <div className='skill-item'>React Native</div>
              <div className='skill-item'>Sass</div>
              <div className='skill-item'>Tailwind CSS</div>
              <div className='skill-item'>Express</div>
              <div className='skill-item'>AWS</div>
              <div className='skill-item'>PostgreSQL</div>
              <div className='skill-item'>MongoDB</div>
              <div className='skill-item'>Firebase</div>
              <div className='skill-item'>Redis</div>
            </div>

            <div className='about-tabs'>
              {/* <button
                className='tab-item active'
                data-target='#education'
                type='button'
              >
                education
              </button> */}
              <button
                className='tab-item active'
                data-target='#experience'
                type='button'
              >
                experience
              </button>
            </div>

            {/* <!-- Education Start --> */}
            {/* <div className='tab-content active' id='education'>
              <div className='timeline'>
                <div className='timeline-item'>
                  <span className='date'>2013 - 2016</span>
                  <h4>
                    bachelor of technology - <span>todfod university</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    assumenda at error eius repudiandae tenetur.
                  </p>
                </div>
                <div className='timeline-item'>
                  <span className='date'>2013 - 2016</span>
                  <h4>
                    bachelor of technology - <span>todfod university</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    assumenda at error eius repudiandae tenetur.
                  </p>
                </div>
                <div className='timeline-item'>
                  <span className='date'>2013 - 2016</span>
                  <h4>
                    bachelor of technology - <span>todfod university</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    assumenda at error eius repudiandae tenetur.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <!-- Education End --> */}

            {/* <!-- Experience Start --> */}
            <div className='tab-content active' id='experience'>
              <div className='timeline'>
                <div className='timeline-item'>
                  <span className='date'>Sep 2021 - Now</span>
                  <h4>
                    Full Stack Developer -{' '}
                    <span>PT. Bhumi Varta Technology</span>
                  </h4>
                  <p>Tech Stack Backend: Express</p>
                </div>
                <div className='timeline-item'>
                  <span className='date'>Mei 2020 - Feb 2021</span>
                  <h4>
                    Director - <span>QOSin Indonesia</span>
                  </h4>
                  <p>
                    - Handle business agent boarding house (primer), travel, and
                    convection for market student
                    <br /> - Handle cooperation partner QOSin
                  </p>
                </div>
                <div className='timeline-item'>
                  <span className='date'>2013 - 2016</span>
                  <h4>
                    Manager of Events -{' '}
                    <span>Muda Mandiri Group Indonesia (MMGI)</span>
                  </h4>
                  <p>
                    - Handle concept event organizer
                    <br />- Marketing event organizer
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Experience End --> */}
            {/* <!-- <a href="cv.pdf" target="_blank" className="btn">download cv</a> --> */}
            <Link href='/portfolio'>
              <a className='btn link-item'>my portfolio</a>
            </Link>
            <Link href='/contact'>
              <a className='btn link-item'>contact me</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
