import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mottaki Hajouni', // e.g: 'Name | Developer'
  lang: 'en,ar,fr', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mottaki Hajouni',
  subtitle: 'Sofware Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'nk22 icon.png',
  paragraphOne: 'Mottaki Hajouni from tunisia aged 20 y.o aka nizarkratos in gaming Carrer.',
  paragraphTwo:
    'Hello , my name is Mottaki Hajouni aged 20 years old Tunisian student , programmer ,video editor and hardcore gamer . Ive been dealing with programming since I was 13 years old and I worked on web development for over 2 years Now. Also start gaming since im very young being a part of e-sport scene in most popular game ever called League of legends also got huch knowledge about game development ',
  paragraphThree: 'I am the Founder of @facna and the CEO of @NK22Companies .',
  resume: 'https://drive.google.com/file/d/1ugDSo2zNzDmhShuxUasfuNrxuVBoLyNV/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fac.png',
    title: 'Facna',
    info: 'Facna is tunisian application founded and created by mottaki hajouni aged 20 y.o studying in iset zaghouan . the main goal of this application is facilite the new students in all university in tunisia founding their own way after succed in baccalauriat also found their best conditions with their own score in the correct university also the application had many features like add events in each university it can help the gouvermenent aswell , got official exams of each year , extra bonus of education like university activity clubs and formations and it will always stay tuned in each period with alot of updates.',
    info2: '',
    url: 'https://facna.netlify.app/',
    repo: 'https://github.com/NizarKratos22/FacnaWebSite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HerpeX white.jpg',
    title: 'Herpex camp.',
    info: 'Herpex is a Tunisian music that makes beats, remixes of popular music, instrumentals for rap music and can also do mastering in the final stages of production. Herpex is also based on an idea mainly in youtube with some video effects and a cool design that depends on the music we make. ',
    info2: '',
    url: 'https://herpex.netlify.app/',
    repo: 'https://github.com/NizarKratos22/Herpex', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'mhfashion.jpg',
    title: 'MH fasion TN',
    info: 'Mh fashion is a new Tunisian clothing brand that sells Tunisian products such as (shorts, t-shorts, watches,...) and now mh fashion is a clothing brand with an official signature, that is to say an official clothing brand with an autonomous production and that grows step by step. ',
    info2: '',
    url: 'https://www.facebook.com/MH-Fashion-105254418372334',
    repo: 'https://github.com/NizarKratos22/mhfashionapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nk22 icon.png',
    title: 'NK22 Music',
    info: 'NK22 Music is a youtube, instagram and tiktok channel based on AMV (anime music video) and GMV (game music video) with better motivation music coding and cool editing with great effects.',
    info2: '',
    url: 'https://nk22music.netlify.app/',

    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hamemavoyage.png',
    title: 'Hamema Voyage',
    info: 'Hamema voyage is a flight service based in tunisia, turkey and algeria offering the best price and quality of flight. ',
    info2: '',
    url: 'https://hamemavoyage.netlify.app/',
    repo: 'https://github.com/NizarKratos22/HamemaVoyage.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nawarti.png',
    title: 'Nawara Shop',
    info: 'Nawarashop is an online store based in Tunisia. We work on a facebook page and an instagram page and we also have a website if you are interested, visit the link below and thank you. ',
    info2: '',
    url: 'http://nawarashop.ga/',
    repo: 'https://github.com/NizarKratos22/nawarashop', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'nk22 icon.png',
    title: 'NK22 Companies',
    info: 'NK22 companies is a very important project for me, Ive been working on it since I was a 14 year old kid or even younger, since I created my youtube channel and got a lot of content. Since then I decided to prevent this nickname from becoming a business structure in many areas and it took a long time and will continue until today. (NK22 Music , NK22 NFT , NK22 Watch , NK22 Gaming )',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'targetpub.png',
    title: 'Target Pub',
    info: 'This project contains the official company portfilio as well as the Crud application for  specifications reservation. ',
    info2:
      'So TargetPub is specialist in digital marketing(Social media marketing , mobile marketing , SEO marketing ,...) also it got specialist in advertising management .',
    url: '',
    repo: 'https://github.com/NizarKratos22/Target_Pub', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nizar.hajjouni7@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/krat0_s',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/nizarkratos22',
    },
    {
      id: nanoid(),
      name: 'gitlab',
      url: 'https://gitlab.com/NizarKratos22',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mottaki-hajouni-6361721b3/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/NizarKratos22',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
