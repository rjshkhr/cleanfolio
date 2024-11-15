const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:3000',
  title: 'MM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Max Martin',
  role: 'Software Engineer',
  description:
    'I’m a Software Engineer with over two years of experience in developing innovative solutions to simplify everyday processes and reduce stress through the effective use of technology.',
  resume: 'https://drive.google.com/file/d/1YCFeGsKZD_XwbSieefHGboNHdjLPH9Mk/view?usp=sharing',
  social: {
    linkedin: 'linkedin.com/in/max-martin1',
    github: 'github.com/maxmartinn',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'FinFindr',
    description:
      'AI powered app that helps users maximize rewards by selecting the best credit card for each vendor type',
    stack: ['.Net', 'C#', 'React Native', 'OpenAI'],
    sourceCode: 'https://github.com/SarasotaDevs/FinFindr',
    livePreview: 'https://github.com/SarasotaDevs/FinFindr',
  },
  {
    name: 'PrepPal',
    description:
      'AI powered natural disaster preparedness app',
    stack: ['FastAPI', 'OpenAI', 'IBM Cloud', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'ChatrBox',
    description:
      'Chatroom enabling real-time conversations',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    sourceCode: 'https://github.com/maxmartinn/ChatrBox',
    livePreview: 'https://github.com/maxmartinn/ChatrBox',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
