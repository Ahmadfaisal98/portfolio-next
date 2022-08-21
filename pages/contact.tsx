import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import Head from 'next/head';

const Contact = () => {
  const router = useRouter();
  const [active, setActive] = useState('');
  const { isNavbarActive } = useStateContext();

  const form: any = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_KEY!
      )
      .then(
        () => {
          toast.success('Success sending mail!');
        },
        () => {
          toast.error('Failed sending mail!');
        }
      );
  };

  useEffect(() => {
    if (router.pathname === '/contact' && !isNavbarActive) {
      setActive('active');
    } else {
      setActive('fade-out');
    }
  }, [router, isNavbarActive]);

  return (
    <>
      <Head>
        <title>Achmad Faisal | Contact</title>
        <meta content='About Ahmad Faisal' name='description' />
        <link href='/Ahmad Faisal - Bg Hijau.png' rel='icon' />
      </Head>

      <section className={`contact-section sec-padding ${active}`} id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='section-title'>
              <h2>contact me</h2>
            </div>
          </div>
          <div className='row'>
            <div className='contact-form'>
              <form onSubmit={sendEmail} ref={form}>
                <div className='row'>
                  <div className='input-group'>
                    <input
                      className='input-control'
                      name='from_name'
                      placeholder='Name'
                      required
                      type='text'
                    />
                  </div>
                  <div className='input-group'>
                    <input
                      className='input-control'
                      name='from_email'
                      placeholder='Email'
                      required
                      type='email'
                    />
                  </div>
                  <div className='input-group'>
                    <textarea
                      className='input-control'
                      name='message'
                      placeholder='Message'
                      required
                    />
                  </div>
                  <div className='submit-btn'>
                    <button className='btn' type='submit'>
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='contact-info'>
              <div className='contact-info-item'>
                <h3>follow me</h3>
                <div className='social-links'>
                  <a
                    href='https://www.instagram.com/ahmad.faisal98/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <i className='fab fa-instagram' />
                  </a>
                  <a
                    href='https://github.com/Ahmadfaisal98'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <i className='fab fa-github' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/ahmad-faisal-a65b77217/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <i className='fa-brands fa-linkedin' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
