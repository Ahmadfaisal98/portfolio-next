import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import profileAbout from '/public/img/profile/Ahmad_Faisal_-_tangan_silang_-_crop-removebg-preview.png';
import { useStateContext } from '../context/StateContext';
import Link from 'next/link';
import Head from 'next/head';
import Experience from '../components/Experience';

const About = () => {
  const router = useRouter();
  const [active, setActive] = useState('');
  const { isNavbarActive } = useStateContext();
  const [toggle, setToggle] = useState('experience');

  useEffect(() => {
    if (router.pathname === '/about' && !isNavbarActive) {
      setActive('active');
    } else {
      setActive('fade-out');
    }
  }, [router, isNavbarActive]);

  return (
    <>
      <Head>
        <title>Achmad Faisal | About</title>
        <meta content='About Ahmad Faisal' name='description' />
        <link href='/Ahmad Faisal - Bg Hijau.png' rel='icon' />
      </Head>

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
                {`I'm an experienced full-stack developer skilled in React JS and
                Node JS, with expertise in various databases like MongoDB,
                Firebase, Redis, MySQL, and PostgreSQL. I excel at creating
                dynamic web solutions and have a strong track record in unit
                testing and CI/CD pipelines. In addition to my technical
                abilities, I have over a year of hands-on experience in business
                management, marketing, and building strong customer
                relationships. I'm always eager to learn and grow, making sure I
                not only excel in my field but also love what I do.`}
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
                <button
                  className={`tab-item ${
                    toggle === 'experience' ? 'active' : ''
                  }`}
                  data-target='#experience'
                  onClick={() => setToggle('experience')}
                  type='button'
                >
                  experience
                </button>
                <button
                  className={`tab-item ${
                    toggle === 'education' ? 'active' : ''
                  }`}
                  data-target='#education'
                  onClick={() => setToggle('education')}
                  type='button'
                >
                  education
                </button>
              </div>

              {/* <!-- Education Start --> */}
              {toggle === 'education' && (
                <div className='tab-content active' id='education'>
                  <div className='timeline'>
                    <div className='timeline-item'>
                      <span className='date'>Mar 2021 - July 2021</span>
                      <h4>
                        Full Stack Developer Bootcamp -{' '}
                        <span>Hacktiv8 Indonesia</span>
                      </h4>
                      <p>Honorary award</p>
                    </div>
                    <div className='timeline-item'>
                      <span className='date'>Jul 2015 - Jan 2020</span>
                      <h4>
                        {`Bachelor's degree -`} <span>Andalas University</span>
                      </h4>
                      <p>GPA 3.42 / 4</p>
                    </div>
                  </div>
                </div>
              )}

              {/* <!-- Education End --> */}

              {/* <!-- Experience Start --> */}
              {toggle === 'experience' && (
                <div className='tab-content active' id='experience'>
                  <div className='timeline'>
                    <Experience
                      date='Jan 2024 - Now'
                      desc='The biggest remote worker platform for IT education in Indonesia.'
                      subTitle='Remote Worker ID - (Remote - Part Time)'
                      title='Mentor Frontend'
                    />
                    <Experience
                      data={[
                        {
                          section: 'Backend',
                          list: [
                            'Develop, improve, and deploy high-quality web',
                            'Using Event-Driven Architecture',
                            'Integration with Stripe',
                            'Integration with HubSpot',
                            'Integration with Xero invoice',
                          ],
                        },
                        {
                          section: 'Frontend',
                          list: [
                            'Develop, improve, and deploy high-quality web feature',
                            'Developed with React and Material-UI',
                            'Integration with CAD Renderer',
                            'Integration with PBrain',
                            'Integration with crisp',
                          ],
                        },
                        {
                          section: 'E2E Test',
                          list: [
                            'Using Cypress',
                            'Testing user flows',
                            'Testing pdf files',
                            'Testing stripe checkout',
                          ],
                        },
                      ]}
                      date='Jan 2023 - Now'
                      desc='Factorem is Southeast Asia first AI-driven platform to
                      order custom manufactured parts. With Factorem, anyone
                      can reduce time-to-market and get low-volume
                      high-quality parts on demand from the best factories in
                      Southeast Asia.'
                      subTitle='Factorem - Singapore (Remote - Full Time)'
                      title='Full Stack Developer'
                    />
                    <Experience
                      data={[
                        {
                          section: 'Backend',
                          list: [
                            'Develop, improve, and deploy high-quality web service',
                            'Initiate and improve standard response API',
                            'Initiate and improve quality code with sonarqube (improve security hotspots, zero bugs, zero vulnerabilities, zero code smells, zero duplications)',
                            'Initiate and create API docs with swagger',
                            'Initiate and improve validation requests with ajv',
                            'Initiate and improve code with DTO Request and Response',
                            'Improve code using async await',
                            'Update package to support node v16',
                          ],
                        },
                        {
                          section: 'Frontend',
                          list: [
                            'Develop, improve, and deploy high-quality web feature',
                            'Improve from CSS to SASS',
                            'Improve components with Atomic Design',
                            'Developed with React and Webpack',
                          ],
                        },
                      ]}
                      date='Sep 2021 - Jan 2023'
                      desc='Bhumi Varta Technology is Indonesia’s leading GeoSpatial
                      Technology Company. We provide the best tools for
                      businesses to make the right decisions by giving them
                      Geospatial, Geographic, as well as Demographic insights'
                      subTitle='Indonesia (Remote - Full Time)'
                      title='Full Stack Developer'
                    />
                    <Experience
                      data={[
                        {
                          section: '',
                          list: [
                            'Handle business agent boarding house (primer), travel, and convection for market student',
                            'Handle cooperation partner QOSin',
                          ],
                        },
                      ]}
                      date='Mei 2020 - Feb 2021'
                      subTitle='QOSin Indonesia'
                      title='Director'
                    />
                    <Experience
                      data={[
                        {
                          section: '',
                          list: [
                            'Handle concept event organizer',
                            'Marketing event organizer',
                          ],
                        },
                      ]}
                      date='Jan 2020 - Jan 2021'
                      subTitle='Muda Mandiri Group Indonesia (MMGI)'
                      title='Manager of Events'
                    />
                  </div>
                </div>
              )}

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
    </>
  );
};

export default About;
