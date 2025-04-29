const header = {
  homepage: 'https://leonlam.xyz',
  title: 'LL.',
}

const about = {
  name: 'Leon Lam',
  role: 'Back End Engineer',
  description:
    'I’m Leon, a backend developer from Dallas who enjoys building efficient, reliable systems with tools like Java, Spring Boot, and Docker. I love solving tough backend challenges and constantly learning new things. Outside of tech, I’m into gaming, lifting, and hanging out with my cat.',
  resume: '/Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/leon-m-lam/',
    github: 'https://github.com/Leon-Lam919',
  },
}

const photos = [
  { cat: "/cat_0.jpg", },
  { cat: "/cat_1.jpg", },
  { cat: "/cat_2.jpg", },
  { cat: "/cat_3.jpg", },
  { cat: "/cat_4.jpg", },
  { cat: "/cat_5.jpg", },
  { cat: "/cat_6.jpg", },
  { cat: "/cat_7.jpg", },
  { cat: "/cat_8.jpg", },
  { cat: "/cat_9.jpg", },
  { cat: "/cat_0.jpg", },
]

const projects = [
  {
    name: 'SmileWorks',
    description:
      'A scalable office management solution for dental clinics, offering streamlined patient management and appointment scheduling, with support for expanding to multiple locations.',
    stack: ['NextJS', 'TypeScript', 'React', 'Express', 'MongoDB', 'Docker'],
    sourceCode: 'https://github.com/Team-D-and-J',
    livePreview: 'https://github.com',
  },
  {
    name: 'Catafun - Natural Language to SQL Query Generator',
    description:
      'Developed a system that converts natural language questions into complex SQL queries and returns human-readable answers, reducing a 1-hour data analysis task to just 5 minutes. Led a cross-functional team of six, driving collaboration and adaptability. Played a key role in surpassing project goals by 50% through innovative problem-solving and effective team leadership.',
    stack: ['Python', 'MySQL', 'React', 'JavaScript'],
  },
  {
    name: 'CPU simulation',
    description:
      'Simulated a basic computer system with seperate processes for CPU and Memory, communicating through inter-process communication. Memory holds a single program, which the CPU executes step-by-step until completion, at which point the simulation terminates.',
    stack: ['Java'],
    sourceCode: 'https://github.com/Leon-Lam919/CS4348/tree/main/Project%201',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C',
  'C++',
  'Java',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'leonlam34@gmail.com',
}

export { header, about, projects, skills, contact, photos }
