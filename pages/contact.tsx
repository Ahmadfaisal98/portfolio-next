import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const router = useRouter();
  const [active, setActive] = useState('');
  const { isNavbarActive } = useStateContext();

  const form: any = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_56lp95r',
        'template_oku0816',
        form.current,
        'HJ3hklIPURYcQdf0S'
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
              <h3>Email</h3>
              <p>ahmadfaisal2098@gmail.com</p>
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;