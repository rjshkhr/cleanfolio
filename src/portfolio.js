const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'JP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jonathan Portillo',
  tagline: 'Brooklyn, NY · Open to full-stack software engineering roles',
  role: 'Software Engineer',
  description:
    'Software engineer with 10 years at T-Mobile, from Mobile Expert to Experience Associate Manager. Most recently I built a full-stack Cache Management tool with the Magenta Accelerator program and cut non-prod deployment runs from about 6 minutes to 30 seconds. I work across Java and Spring Boot, Node.js, Angular and React, and I am looking for a full-time software engineering role where I can build across the whole stack.',
  resume: '/Jonathan-Portillo-Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/jonathanportillo93/',
    github: 'https://github.com/jonathan-portillo',
  },
}

const experience = [
  // experience can be added or removed
  // wrap text in **double asterisks** to make it bold
  // if there is no experience, Experience section won't show up
  {
    role: 'Software Engineer Intern, Magenta Accelerator Program',
    company: 'T-Mobile',
    location: 'Overland Park, KS',
    dates: 'Aug 2026 – Oct 2026',
    highlights: [
      'Built a full-stack **Cache Management tool** (Java/Spring Boot, Node.js, Angular) giving engineers self-service Redis access.',
      'Cut non-prod deployment script runtime from **~6 minutes to ~30 seconds** by parallelizing config rendering and cluster fetches.',
      'Standardized 500/503 error messages across **50+ API configs**, verified with WireMock and Cucumber.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Ranial Systems Inc',
    location: 'Long Island City, NY',
    dates: 'Jun 2024 – Jan 2025',
    highlights: [
      'Built a secure **admin settings page** with protected routes and role-based access.',
      'Built responsive **Angular, TypeScript and Tailwind** components, with front-end authentication and RxJS state management.',
      'Wrote unit and integration tests with Jasmine and Karma to improve reliability.',
    ],
  },
  {
    role: 'Experience Associate Manager',
    company: 'T-Mobile',
    location: 'Queens, NY',
    dates: 'Jun 2015 – Present',
    highlights: [
      "**Annual Winner's Circle 2024:** top 1% of sales representatives company-wide (224 of 20,610).",
      'Coached Sr. Mobile Experts through skill practice and account audits, and led the team past its Q2 2026 new-account targets.',
      'Consistently hit monthly sales quotas while building relationships with business customers.',
    ],
  },
]

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Task Note',
    description:
      'A Full Stack Web App that allows you to store your day-to-day notes. The frontend is handled through React and Redux. The backend uses Node.js and Express',
    stack: ['React', 'Redux', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/jonathan-portillo/todo-frontend-',
    livePreview: 'https://task-notes-omega.vercel.app/',
  },
  {
    name: 'Subreddit Predictor',
    description:
      'Have you ever created a Reddit Post and wondered which subreddit it should be posted? Subreddit Predictor is a Full Stack Web App built through React and handled with Node.js and Express does all the work for you',
    stack: ['React', 'Redux', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/posthere1',
    livePreview: 'https://posthere1-fe.vercel.app',
  },
  {
    name: 'Merchant MarketPlace',
    description:
      'Merchant Market Place is a secure app where a merchant can create a profile and sell product as well as gives shoppers the option to create a profile, match with sellers and find their favorite goods and products up for sale.',
    stack: ['React', 'Redux', 'Node.js', 'Express'],
    sourceCode:
      'https://github.com/BloomTech-Labs/PT17_merchant-marketplace-c-fe',
    livePreview:
      'https://github.com/BloomTech-Labs/PT17_merchant-marketplace-c-fe',
  },
  {
    name: 'Anywhere Fitness',
    description:
      'Be it an instructor looking to set up classes for clients to work out or just someone looking to find a place to work out, Anywhere Fitness is a React Web Application that allows you to create or register classes',
    stack: ['React', 'Redux', 'Javascript'],
    sourceCode:
      'https://github.com/jonathan-portillo/Front-End-Anywherefitness',
    livePreview: 'https://front-end-anywherefitness-sable.vercel.app/',
  },
  {
    name: 'Anywhere Fitness Backend',
    description:
      'A Node.js based backend for an app that allows you to create and register for fitness classes. This was built in conjunction with Anywhere Fitness as a fullstack web application',
    stack: ['Node.js', 'Express', 'Knex.js', 'SQLite'],
    sourceCode: 'https://github.com/anywherefitness-tt187/Back-End',
    livePreview: 'https://everywherefitness-9ab34b5731c6.herokuapp.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    category: 'Languages',
    items: [
      'Java',
      'TypeScript',
      'JavaScript',
      'Python',
      'Bash',
      'HTML',
      'CSS',
    ],
  },
  {
    category: 'Frameworks',
    items: [
      'Spring Boot',
      'Angular',
      'React',
      'Redux',
      'RxJS',
      'Node.js',
      'Express.js',
      'TailwindCSS',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitLab CI/CD',
      'Kubernetes',
      'HashiCorp Vault',
      'Redis',
      'Splunk',
      'Jira',
      'jq',
      'YAML',
      'Jinja2',
    ],
  },
  {
    category: 'Testing',
    items: ['JUnit', 'WireMock', 'Cucumber', 'Jasmine', 'Karma'],
  },
  {
    category: 'Practices',
    items: [
      'REST API design and debugging',
      'Root-cause analysis',
      'Performance optimization',
      'Test-first development',
      'Code review',
      'Configuration management',
      'Environment promotion (local to prod)',
      'Technical documentation',
      'Cross-team collaboration',
      'Agile',
    ],
  },
]

const contact = {
  // message is optional - shown above the email
  message:
    "Open to software engineering roles across the front end, back end, or full stack. Let's build something great together.",
  // email is optional - if left empty Contact section won't show up
  email: 'jonport93@gmail.com',
}

export { header, about, experience, projects, skills, contact }
