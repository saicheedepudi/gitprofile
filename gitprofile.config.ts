// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'saicheedepudi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/saicheedepudi/saicheedepudi.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/saicheedepudi/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['saicheedepudi/gitprofile', 'saicheedepudi/TODO'],
      },
    },
  },  
 
  seo: {
    title: 'Portfolio of Saiprasanna Cheedepudi',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'sai-cheedepudi',
    twitter: '',
    mastodon: '',
    researchGate: 'Sai-Cheedepudi',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'saiprasanna.cheedepudi@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'Angular',
    'React.js',
    'Node.js',
    'Spring',
    'MySQL',
    'Cassandra',
    'Elastic Search',
    'Git',
    'Docker',
    'Kubernetes',
    'CSS',
    'HTML',
    'Azure',
    'AWS',
    'Tableau',
    'Kafka',
    'Kibana',
    'Gen AI',
  ],
  experiences: [
    {
      company: 'Southern Illinois University',
      position: 'Research Assistant',
      from: 'Aug 2021',
      to: 'Dec 2022',
      companyLink: 'https://siu.edu',
    },
    {
      company: 'Opsramp',
      position: 'Software Product Developer - Data Science',
      from: 'May 2018',
      to: 'July 2021',
      companyLink: 'https://opsramp.com',
    },
  ],
  educations: [
    {
      institution: 'Southern Illinois University',
      degree: 'MS',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Andhra University',
      degree: 'B.Tech',
      from: '2014',
      to: '2018',
    },
  ],
  publications: [
    {
      title: 'Analyzing the Digital Distress in Illinois Region',
      conferenceName: '',
      journalName: 'Open SIUC',
      authors: 'Saiprasanna Cheedepudi',
      link: 'https://opensiuc.lib.siu.edu/theses/3051/',
      description:'As the digital economy and society continue to grow, communities and individuals have a shot at improving their quality of life. However, not everybody is being able to participate in this digital age. Those on the wrong side of the divide are being left behind, prompting the creation of strategies to ensure everybody can reap the benefits of this new age. For creation of such strategies, we need to know the factors effecting the Internet facilities. Thanks to data from the U.S. Census Bureau American Community Survey (ACS) — a look at this dimension of digital inclusion is explored through looking at two broad indicators: type of internet subscription (or lack of) and device ownership (or lack of). It is important for us to understand what other factors may facilitate Internet development and it is achieved through correlation. With a better understanding of the various factors affecting Internet diffusion, it is hoped that developing countries will better target their efforts in reducing the digital divide and make the Internet a truly global information network, make all the regions truly CONNECTED with device.'
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    //source: 'dev', // medium | dev
    //username: 'arifszn', // to hide blog section, keep it empty
    //limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    //id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/saicheedepudi/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
