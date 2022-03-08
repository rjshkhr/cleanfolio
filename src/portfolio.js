import pdf from './components/Pdf/nmpereira_cv.pdf'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: window.location.href,
  title: 'Mario',
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
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
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
    sourceCode: 'http://pytimerapp.herokuapp.com/',
    livePreview: 'https://github.com/nmpereira/pytimer',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'SASS',
  // 'TypeScript',
  'MongoDB',
  'Express',
  'React',
  'Node',
  // 'Redux',
  // 'Material UI',
  'Git',
  'CI/CD',
  'Postman',
  'Python',
  'BootStrap',
  'Selenium',
  // 'Jest',
  // 'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nikhilpereira125@gmail.com',
}

export { header, about, projects, skills, contact }
