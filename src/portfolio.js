const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ojyoon23.github.io/cleanfolio',
  title: 'Olivia Yoon',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Olivia Yoon',
  role: 'Analyst',
  description:
    'I build controls that turn complex contracts into accurate, compliant payments. My focus is on reconciliation, variance testing, and implementing data-driven internal controls and process improvements. I’m passionate about making smart, ethical, and environmentally sound decisions that are both informed now and sustainable in the long term.
  ',
  resume: '',
  social: {
    linkedin: 'https://linkedin.com/in/olivia-yoon',
    github: 'https://github.com/ojyoon23',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Stock Prediction Web Application',
    description:
      'Helps users make investment decisions by forecasting stock prices for up to 4 years by automatically reading Yahoo finance data based on user input',
    stack: ['Python', 'Streamlit', 'Prophet', 'LSTM'],
    sourceCode: 'https://github.com/ojyoon23/stock-pred-webapp',
  },
  {
    name: 'Loan Lender Matching Analysis',
    description:
      'Recommends certain groups of customers to specific lenders to increase approval rate and revenue by analyzing loan application data',
    stack: ['Python', 'Plotly'],
    // sourceCode: 'https://github.com/ojyoon23/Spotify-Trendy-Songs-Prediction',
    livePreview:
      'https://docs.google.com/document/d/18NhPDhtFdV1rhcs8MJoRCX4iv8h9qEjeu0grXZOwyZI/edit?usp=sharing',
  },
  {
    name: 'Retail Sales Analysis Dashboard',
    description:
      'Obtains insights into consumer shopping behavior by exploring consumer demographic and the correlation between a discount of products and quantity of order',
    stack: ['Tableau'],
    // sourceCode: 'https://github.com',
    livePreview:
      'https://public.tableau.com/views/SalesAnalysisDashboard_16676457735360/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link',
  },
  {
    name: 'Social Media Engagement Analysis Dashboard',
    description:
      'Explores social media data to improve user engagement and advertising strategy',
    stack: ['Google BigQuery', 'Tableau'],
    // sourceCode: 'https://github.com',
    livePreview:
      'https://public.tableau.com/app/profile/olivia.yoon/viz/SocialBuzz_16718503511100/Dashboard2?publish=yes',
  },
  {
    name: 'Spotify Songs Prediction',
    description:
      'Provides Spotify a better understanding of trends and recommendations for their target audience by comprehending global user’s listening behavior, predicting popularity score of a song and classifying its genre based on its features',
    stack: ['Python', 'PCA', 'Logistic Regression'],
    sourceCode: 'https://github.com/ojyoon23/Spotify-Trendy-Songs-Prediction',
    livePreview:
      'https://drive.google.com/file/d/1jBT3OqSwdq01JE3WP_Im9ktbPuColIgQ/view?usp=share_link',
  },
  {
    name: 'NewsStream (Web Dev Project)',
    description:
      'A responsive news website with the use of News API to fetch and display real-time relevant news articles for users to search and read',
    stack: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
    sourceCode: 'https://github.com/ojyoon23/nytimes',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'SQL',
  'R/RStudio',
  'Tableau',
  'Google BigQuery',
  'Google Cloud Platform',
  'Git',
  'Jira',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ojyoon23@gmail.com',
}

export { header, about, projects, skills, contact }
