const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Joseph Masson',
  role: 'Computer Science Student',
  description:
    'I am a student at Georgia Institute of Technology, studying Information Internetworks and Systems Architecture. I am a Teaching Assistant for Databases and Discrete Math, and develop for clubs like GreyHat and iOS Club. In my free time, I do research on Cyber-Physical Systems with robotics, and frequently compete in hackathons. I am passionate about software development and cybersecurity, and I am always looking for new opportunities to learn and grow.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/jhmusm21',
    github: 'https://github.com/josephmasson26',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ScribbleTex',
    description:
    'AI ATL Best Use of GitHub Winner: A handwriting to LaTeX conversion tool.',
    stack: ['React', 'Flask', 'Google Cloud', 'ML', 'Vertex-AI'],
    sourceCode: 'https://github.com/josephmasson26/ScribbleTex',
    livePreview: 'https://devpost.com/software/scribbletex',
  },
  {
    name: 'DiagnoseMe',
    description:
      'Interactive chatbot application designed to simulate patient interactions for medical students.',
    stack: ['JavaScript', 'Python', 'Electron', 'OpenAI'],
    sourceCode: 'https://github.com/josephmasson26/DiagnoseMe',
    livePreview: 'https://devfolio.co/projects/diagnoseme-1992',
  },
  {
    name: 'MorseTorch',
    description:
      'Computer vision iOS application that translates between Morse code and English.',
    stack: ['Swift', 'C++'],
    sourceCode: 'https://github.com/josephmasson26/MorseTorch',
    livePreview: 'https://devpost.com/software/morse-torch',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'SQL',
  'JavaScript',
  'Python',
  'Swift',
  'C',
  'C++',
  'Assembly',
  'Rust',
  'HTML',
  'CSS',
  'R',
  'React',
  'Electron',
  'MySQL',
  'Android Studio',
  'Xcode',
  'Git',
  'AWS',
  'Google Cloud',
  'Jupyter Notebook',
  'Docker',
  'ROS2',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'joseph_masson@icloud.com',
}

export { header, about, projects, skills, contact }
