import pdf from '../public/nmpereira_cv.pdf'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: window.location.href,
  title: 'Mario Pereira',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mario',
  role: 'Full Stack Software Developer',
  // description:
  //   'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: pdf,
  social: {
    linkedin: 'https://www.linkedin.com/in/nikhilpereira25/',
    github: 'https://github.com/nmpereira',
    twitter: 'https://twitter.com/Mariojuanaaa_',
    discord: 'https://discordapp.com/users/548302698752245780',
    linktree: 'https://linktr.ee/mariojuanaaa',
    calendly: 'https://calendly.com/mariojunaaa',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  {
    name: 'Cannabis price tracker',
    description: 'A price tracker for cannabis products from various dispensaries in canada (Client work)', 
    stack: ['Express', 'Node', 'Puppeteer', 'MongoDB', 'React', 'TailwindCSS', 'TypeScript'],
    sourceCode: 'https://github.com/nmpereira/prettydakush',
    livePreview: 'https://cannabis-price.nmpereira.com/',
  },
   {
    name: 'Shared Timer',
    description: 'A shared Timer for working with remote teams',
    stack: ['Express', 'Node', 'Socket.io'],
    sourceCode: 'https://github.com/nmpereira/time-share',
    livePreview: 'https://time.nmpereira.com/',
  },
  {
    name: 'Conversation Starters App',
    description: 'An app to help people with conversation starters/prompts',
    stack: ['Express', 'Node', 'MongoDB', 'EJS', 'TailwindCSS'],
    sourceCode: 'https://github.com/nmpereira/cardGameBackend',
    livePreview: 'http://cards.nmpereira.com/',
  },
  {
    name: 'Andromedus Consulting',
    description: 'A WordPress site for a ERP consulting firm.',
    stack: ['WordPress'],
    // sourceCode: 'https://github.com',
    livePreview: 'http://www.andromedusconsulting.com/',
  },
  {
    name: 'FriendList',
    description:
      'A project for a friend list that uses CRUD based on Ruby on rails. Uses RDBMS (MySql) to store userdata with user authentication using devise.',
    stack: ['Ruby on rails', 'BootStrap'],
    sourceCode: 'https://github.com/nmpereira/FriendsDB-railsfriends',
    livePreview: 'https://nmpereira.herokuapp.com/',
  },
  {
    name: 'Workout Timer',
    description: 'Timer for working out or pomodoro using flask, HTML and CSS.',
    stack: ['Flask', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/nmpereira/pytimer',
    livePreview: 'http://pytimerapp.herokuapp.com/',
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'SASS',
  'MongoDB',
  'Express',
  'React',
  'Node',
  'Socket.io',
  'Git',
  'CI/CD',
  'Postman',
  'Python',
  'BootStrap',
  'Selenium',
  'bulma',
  'Linux',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nikhilpereira125@gmail.com',
}

export { header, about, projects, skills, contact }
