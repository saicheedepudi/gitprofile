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
      external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Federated learning and Differential Privacy in medical context: Phenomenal classification of Diabetic Retinopathy ',
          description:
            'In every corner of the world, people are facing lots of health complications and diseases and diabetic retinopathy disease is one of them. Deep learning is an effective means to assist an eye specialist to analyze the vast amount of retina images, which can potentially have a substantial role in streamlining and accelerating the diagnosis of diabetic retinopathy. These techniques require large datasets for training, and to use them, all the data must be centralized. Often, it is not possible to collect and share patient data on a centralized server due to medical data privacy regulations. Our work will present a collaborative federated learning framework capable of analyzing images using deep learning without sharing patient information between medical institutions. The dataset we are going to use consists of images and is classified into 5 classes as No Diabetic Retinopathy, Mild, Moderate, Severe, and Proliferative Diabetic Retinopathy (PDR). ',
          imageUrl:
            'https://github.com/saicheedepudi/Federated-learning-and-Differential-Privacy-in-medical-context-Diabetic-Retinopathy/assets/22156200/eb9068c2-edb8-4872-a542-d1f85a29522d',
          link: 'https://github.com/saicheedepudi/Federated-learning-and-Differential-Privacy-in-medical-context-Diabetic-Retinopathy',
        },
        {
          title: 'Fuzzy Preference Model',
          description:
            'Abstract—The Web creates excellent opportunities for businesses to provide personalized online services to their customers. Recommender systems aim to automatically generate personalized suggestions of products/services to customers (businesses or individuals). Although recommender systems have been well studied, there are still two challenges in the development of a recommender system, particularly in real-world B2B e-services: 1) items or user profiles often present complicated tree structures in business applications, which cannot be handled by normal item similarity measures and 2) online users’ preferences are often vague and fuzzy, and cannot be dealt with by existing recommendation methods. To handle both these challenges, this study first proposes a method for modeling fuzzy tree-structured user preferences, in which fuzzy set techniques are used to express user preferences. A recommendation approach to recommending tree-structured items is then developed. The key technique in this study is a comprehensive tree matching method, which can match two tree-structured data and identify their corresponding parts by considering all the information on tree structures, node attributes, and weights. ',
          imageUrl:
            'https://github.com/saicheedepudi/Fuzzy-Preference-Model/assets/22156200/d48a46bd-9080-46a3-a9c1-0846f77418ef',
          link: 'https://github.com/saicheedepudi/Fuzzy-Preference-Model/',
        },
      ],
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
      'https://github.com/saicheedepudi/portfolio/blob/main/SaiCheedepudi_DataScientist.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
    'GCP',
    'Tableau',
    'Power BI',
    'MatLab',
    'Django', 'LangChain',  'Flask', 'Fast API','CNN','Numpy', 'Pandas', 'Scikit-learn', 'Tensorflow', 'Pytorch', 'Pyspark', 'Hugging Face Transformers', 'NLP', 'LLM', 'OpenAI', 'LLaMa', 'LSTM', 'Chat GPT', 'BERT',  'Linear Regression', 'Logistic Regression', 'SVM', 'Random Forest', 'Decision Tree', 'K-Means', 'Forecasting', 'Reinforcement Learning', 'KNN', 'XGBoost', 'Bagging',
    'Kafka','Seaborn', 'Matplotlib', 'Github Actions', 'Redis', 'Memchahce', 'Terraform', 'Heroku', 'Streamlit',  'GitLab', 'GitHub','Microservices','Multi Threading','GPU','Jupyter','Eclipse', 'Spyder', 'Google Colab',
    'Kibana',
    'Gen AI',
  ],
  experiences: [
    
    {
      company: 'Carmax',
      position: 'Data Scientist',
      from: 'May 2022',
      to: 'Present',
      companyLink: 'https://siu.edu',
    },
    {
      company: 'Southern Illinois University',
      position: 'Research Assistant',
      from: 'Aug 2021',
      to: 'May 2022',
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
