const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/adit26data',
  title: 'AK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Adit Kaushal',
  role: 'Computer Science Student',
  description:
    'My name is Adit. I am a pupil at VIT currently pursuing Bacherlor\'s of Technology in Computer Science and Engineering. I have knowledge of full stack web development. You get responsive and beautiful websites for the best user satisfaction. I believe in clean, effecient and structured work with good problem solving skills. I like to read books, sketch, history and travel. ',
  resume: 'https://aditresume.tiiny.site/',
  social: {
    linkedin: 'https://www.linkedin.com/in/adit-kaushal-34bab221b/',
    github: 'https://github.com/adit26data',
  },
}

const projects = [
  {
    image: 'https://i.ibb.co/NNZ9y0C/images4.png',
    name: 'Interlab Communication System with Inventory management using port forwarding technique',
    description:
      'This is a project built for a security organisation to have secure GUIs for long distance file transfer and track their resource usage over different labs across the nation.',
    stack: ['Python', 'tkinter', 'ngrok'],
    sourceCode: 'https://github.com/adit26data/Interlab-Communication-with-Inventory-Management-System',
    livePreview: 'https://github.com/adit26data/Interlab-Communication-with-Inventory-Management-System',
  },
  {
    image: 'https://i.ibb.co/6Ph7x2B/images3.png',
    name: 'Shopper.com',
    description:
      'A fully functional e-commerce website with friendly user interface and eye catching product templates with dummy payment gateways.',
    stack: ['React', 'Javascript', 'MongoDB', 'NodeJS', 'CloudinaryAPI', 'Stripe'],
    sourceCode: 'https://github.com/adit26data/mern-stack-final',
    livePreview: 'https://github.com/adit26data/mern-stack-final',
  },
  {
    image: 'https://i.ibb.co/RHBKSrP/images2.png',
    name: 'Shoeezy.com',
    description:
      'An innovative frontend for a shoe shopping website built with trendy template to attract the sneaker lovers.',
    stack: ['JS', 'HTML5', 'Bootstrap'],
    sourceCode: 'https://github.com/adit26data/Shoeezy.com',
    livePreview: 'https://adit26data.github.io/Shoeezy.com/',
  },
]

const works = [
  {
    logo: 'https://media.9curry.com/uploads/organization/image/2013/inmas-logo.png',
    name: 'Technical Trainee | INMAS-DRDO',
    duration: 'August 2023-September 2023',
    description:
      'Built and laid the foundational GUIs for long distance file transfer and communication bewteen several labs and also collaborated on creation of an inventory management system to help INMAS track their resource usage.',
    stack: ['Python', 'tkinter', 'ngrok', 'Socket Programming'],
    sourceCode: 'https://github.com/adit26data/Interlab-Communication-with-Inventory-Management-System',
    livePreview: 'https://github.com/adit26data/Interlab-Communication-with-Inventory-Management-System',
  },
  {
    logo: 'https://media.licdn.com/dms/image/D4D0BAQFTpfRDuChAOQ/company-logo_200_200/0/1680453080332?e=2147483647&v=beta&t=0PWAAQjDvmFBOhKvd2WJA58DjTtx2yojkT7Jxj7-R9w',
    name: 'Web Development Intern | Prodigy Infotech',
    duration: 'July 2023-August 2023',
    description:
      'Student training to implement web development skills on small projects given by the firm including landing pages',
    stack: ['JS', 'HTML', 'CSS', 'Bootstrap'],
    sourceCode: 'https://github.com/adit26data/PRODIGY_WD_1',
    livePreview: 'https://github.com/adit26data/PRODIGY_WD_1',
  },
]

const educations = [
  {
    logo: 'https://e0.pxfuel.com/wallpapers/596/856/desktop-wallpaper-vit-logo-vellore-institute-of-technology-vector-indian-institute-logo.jpg',
    name: 'Vellore Institute of Technology, Vellore, Tamil Nadu, India',
    duration: 'B.Tech[CSE]\n2021-2025',
    grade: '9.63 CGPA',
    stack: ['Societies part of:', 'IEEE-PCS VIT', 'Innovator\'s Quest'],
  },
  {
    logo: 'https://media.licdn.com/dms/image/C4E0BAQHhST-L3DCTHA/company-logo_200_200/0/1630600666131?e=2147483647&v=beta&t=0x824yK8zXhcXnAkpZaH7h3dLn0_MB6gWE4fswGJlh8',
    name: 'St.George\'s Collge,Agra,Uttar Pradesh, India',
    duration: '2012-2021',
    grade: '96%',
    stack: ['School High Scorer for Annual Board Examinations'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'C++',
  'Python',
  'NodeJS',
  'ExpressJS',
  'Bootstrap',
  'Java',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kaushaladit26@gmail.com',
}

export { header, about, projects, works, skills, contact, educations }
