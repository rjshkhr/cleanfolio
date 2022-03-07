const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nmpereira-dev.netlify.app/',
  title: 'Mario',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mario',
  role: 'Full Stack Software Developer',
  // description:
  //   'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/nikhilpereira25/',
    github: 'https://github.com/nmpereira',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
