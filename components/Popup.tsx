import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useStateContext } from '../context/StateContext';

const Popup = ({ title, desc, image, technologies, view }: any) => {
  const { isOpenPopup, setIsOpenPopup } = useStateContext();
  const ref = useRef<HTMLInputElement>(null);
  const refToggle = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (evt: any) => {
      if (
        (ref.current &&
          !ref.current.contains(evt.target) &&
          !evt.target.classList.contains('view-project-btn')) ||
        (refToggle && refToggle.current?.contains(evt.target))
      ) {
        setIsOpenPopup(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div className={`portfolio-popup ${isOpenPopup ? 'open' : ''}`}>
      <div className='pp-inner'>
        <div className='pp-content' ref={ref}>
          <div className='pp-header'>
            <div className='btn pp-close' ref={refToggle}>
              <i className='fas fa-times' />
            </div>
            <div className='pp-thumbnail'>
              {image && <Image alt='pp-thumbnail' src={image} />}
            </div>
            <h3 className='portfolio-item-title'>{title}</h3>
          </div>
          <div className='pp-body'>
            <div className='description'>
              <p>{desc}</p>
            </div>
            <div className='general-info'>
              <ul>
                <li>
                  technologies used
                  {Array.isArray(technologies) ? (
                    technologies.map((e, i) => (
                      <div className='array-tech' key={i}>
                        - <span className='desc-array'>{e}</span>
                      </div>
                    ))
                  ) : (
                    <span> - {technologies}</span>
                  )}
                </li>
                <li>
                  <div className='social-links'>
                    {view?.map(({ link, icon, label }: any) => (
                      <a
                        href={link}
                        key={link}
                        rel='noreferrer'
                        target='_blank'
                        title={label}
                      >
                        <i className={icon} />
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
