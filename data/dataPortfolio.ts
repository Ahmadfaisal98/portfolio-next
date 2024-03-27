import cleaningService from '/public/img/portfolio real/cleaning-service.png';
import game2048 from '/public/img/portfolio real/game-2048.png';
import facebook from '/public/img/portfolio real/facebook-clone.png';
import courseBox from '/public/img/portfolio real/courseBox.png';
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
    view: [
      {
        link: 'https://facebook-clone-ahmad.vercel.app/',
        icon: 'fa-solid fa-globe',
        label: 'View Online',
      },
      {
        link: 'https://github.com/Ahmadfaisal98/facebook-clone/',
        icon: 'fa-brands fa-github',
        label: 'View Github',
      },
    ],
  },
  {
    title: 'Demo Web - Courses Box',
    image: courseBox,
    desc: `Simple website with authentication (login, register), home page, detail page, search page, dark mode, full responsive. 
      It is built from TypeScript, Next Js, and has CI/CD`,
    technologies: [
      'Frontend: TypeScript, NextJs (with SSG, SSR), Storybook (with UI Test, Chromatic), Jest, Emotion, Redux, Vercel',
      'Backend: Strapi, PostgreSQL, Heroku',
      'CI/CD: Github Actions, chromatic deployment, check code (with jest, eslint), storybook publish, UI Tests, Deploy Vercel',
    ],
    extraLinks: [
      {
        label: 'Sonar-check',
        link: 'https://sonarcloud.io/summary/overall?id=Ahmadfaisal98_coursebox',
        title: 'Quality Code',
      },
      {
        label: 'Storybook',
        link: 'https://63162231c41e0fd82718a836-gwvicmaquy.chromatic.com/',
        title: 'UI components',
      },
      {
        label: 'Chromatic',
        link: 'https://www.chromatic.com/build?appId=63162231c41e0fd82718a836&number=42',
        title:
          'Automates gathering UI feedback, visual testing, and documentation,',
      },
    ],
    view: [
      {
        link: 'https://coursebox-ahmad.vercel.app/',
        icon: 'fa-solid fa-globe',
        label: 'View Online',
      },
      {
        link: 'https://github.com/Ahmadfaisal98/coursebox',
        icon: 'fa-brands fa-github',
        label: 'View Github',
      },
    ],
  },
  {
    title: 'Landing page - Cleaning Service',
    image: cleaningService,
    desc: `Landing page static with full animation, full responsive`,
    technologies: [`javascript, jQuery, bootstrap`],
    view: [
      {
        link: 'https://cleaning-service-achmad.vercel.app/',
        icon: 'fa-solid fa-globe',
      },
    ],
  },
  {
    title: 'Game - 2048',
    image: game2048,
    desc: `Simple clone game 2048, work with arrow keyboard and touch screen on the phone`,
    technologies: 'javascript, css',
    view: [
      {
        link: 'https://game-2048-achmad.vercel.app/',
        icon: 'fa-solid fa-globe',
        label: 'View Online',
      },
      {
        link: 'https://github.com/Ahmadfaisal98/game-2048/',
        icon: 'fa-brands fa-github',
        label: 'View Github',
      },
    ],
  },
  {
    title: 'Portfolio - Achmad Faisal',
    image: ahmadFaisal,
    desc: `My portfolio website`,
    technologies: 'NextJs, css',
    view: [
      {
        link: 'https://www.achmadfaisal.com/',
        icon: 'fa-solid fa-globe',
        label: 'View Online',
      },
    ],
  },
  {
    title: 'Landing page - mobile app',
    image: mobileApp,
    desc: `Landing page static with full animation`,
    technologies: 'javascript, jQuery, bootstrap',
    view: [
      {
        link: 'https://landing-mobile-app-achmad.vercel.app/',
        icon: 'fa-solid fa-globe',
        label: 'View Online',
      },
    ],
  },
];
