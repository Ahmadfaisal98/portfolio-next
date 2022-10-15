import reactNatour from '/public/img/portfolio real/react-natour.png';
import game2048 from '/public/img/portfolio real/game-2048.png';
import facebook from '/public/img/portfolio real/facebook-clone.png';
import cleaningService from '/public/img/portfolio real/cleaning-service.png';
import ahmadFaisal from '/public/img/portfolio real/achmad-faisal.png';
import mobileApp from '/public/img/portfolio real/landing-page-mobile-app.png';

export const dataPortfolio = [
  {
    title: 'Clone - Facebook',
    image: facebook,
    desc: `Facebook clone with full authentication (login, register, reset, forgot password with OAuth2 google mail),
     homepage (CRUD Post with emoji, react, comment, save post, download images), 
     profile page (update photo and cover with custom crop image, CRUD Post), 
     friends page (sent, request, follow, all friend, search friend), dark mode, full responsive`,
    technologies: [
      `Frontend: React, sass, redux (rtk query with auto refetch, auto cache, redux persist), 
      formik (with yup), debounce, react-moment, react-loading-skeleton, react-easy-crop.`,
      `Backend: Express, mongodb (with mongoose, mongoose-unique-validator), bcrypt, json-web-token, 
      cors, cloudinary, express-fileupload, googleapis, morgan, nodemailer`,
    ],
    view: 'https://facebook-clone-ahmad.vercel.app/',
  },
  {
    title: 'Landing page - Natours',
    image: reactNatour,
    desc: `Landing page static with full animation`,
    technologies: 'React, sass',
    view: 'https://react-natour.web.app',
  },
  {
    title: 'Game - 2048',
    image: game2048,
    desc: `Simple clone game 2048`,
    technologies: 'javascript, css',
    view: 'https://game-2048-achmad.vercel.app/',
  },
  {
    title: 'Portfolio - Achmad Faisal',
    image: ahmadFaisal,
    desc: `My portfolio website`,
    technologies: 'NextJs, css',
    view: 'https://www.achmadfaisal.com/',
  },
  {
    title: 'Landing page - Cleaning Service',
    image: cleaningService,
    desc: `Landing page static with full animation`,
    technologies: 'javascript, css, aos',
    view: 'https://cleaning-service-achmad.vercel.app/',
  },
  {
    title: 'Landing page - mobile app',
    image: mobileApp,
    desc: `Landing page static with full animation`,
    technologies: 'javascript, jQuery, bootstrap',
    view: 'https://landing-mobile-app-achmad.vercel.app/',
  },
];
