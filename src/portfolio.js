const header = {
  homepage: 'https://gu-amorim.github.io/',
  title: 'Gustavo Amorim',
}

const about = {
  name: 'Gustavo Amorim',
  role: 'Software Developer',
  description:
    'Passionate Software Developer with over 1.5 years of experience in developing web, mobile applications, and backend APIs. Graduated with a Computer Science degree. Specialized in writing clear, concise and maintainable code. Experienced in collaborating with teams of various sizes across multiple projects. Highly adaptable to work independently, remotely, or in office environments as needed.',
  social: {
    linkedin: 'https://linkedin.com/in/guamorim',
    github: 'https://github.com/gu-amorim/',
    lattes: 'http://lattes.cnpq.br/8501067789255885',
  },
}

const projects = [
  {
    name: 'Amorim Capstone Manager',
    description:
      'Developed as my final graduation project at the University of Vale do Itajaí (UNIVALI), this system improves the management and monitoring of final graduation projects (TCCs). It automates, standardizes, and facilitates communication among all parties involved, especially the supervising professor, across the three stages of the Computer Science TCC at the university. (Pictures will be available soon).',
    stack: [
      'Python',
      'Django',
      'Django Rest Framework',
      'JavaScript',
      'ReactJS',
      'MySQL',
      'AWS',
    ],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://web-acm.vercel.app',
  },
  {
    name: 'Plant Manager',
    description:
      "Plant Manager is an APP I developed for Rocketseat's 5th Next Level Week. In summary, this is an auxiliary app that helps users water their plants correctly. You register your plant in the app, and the app tells you how often that type of plant needs to be watered, which environments it best adapts to, and allows you to set alarms so you don't forget about them.",
    stack: ['TypeScript', 'ReactNative'],
    sourceCode: 'https://github.com/gu-amorim/plantmanager',
    // livePreview:
    //   'https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate?node-id=0%3A1',
  },
  {
    name: 'Podcaster',
    description:
      "Podcastr is a website I developed for @Rocketseat's 5th Next Level Week. This is a web application that allows users to listen to their favorite podcasts, see the latest releases, and get more information about the podcasts they are currently listening to. (Live preview will be available soon).",
    stack: ['TypeScript', 'ReactJS', 'Next.js'],
    sourceCode: 'https://github.com/gu-amorim/podcastr',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  'C++',
  'C#',
  'Python',
  'Django',
  'Django Rest Framework',
  'JavaScript',
  'ReactJS',
  'React Native',
  'TypeScript',
  'HTML',
  'CSS',
  'MySQL',
  'Windows',
  'MacOS',
  'Linux',
]

const contact = {
  email: 'gu.amorim@yahoo.com.br',
}

export { header, about, projects, skills, contact }
