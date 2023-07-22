

import Aidinity from './../assets/projects/aidinity.png'
import Portfolio from './../assets/projects/portfolio.png'
import Library from './../assets/projects/library.png'
 
const ProjectsData = [
  {
    id: "1",
    img: Aidinity,
    name: "Aidinity",
    live: "https://aidinity.netlify.app/",
    source: "https://github.com/singhaayush5/Aidinity",
    description:  
        "Aidinity is an innovative online platform that combines the power of fundraising campaigns for medical needs with a safe space for anonymous expressions about mental health. It aims to empower individuals facing medical challenges and provide a supportive community for sharing personal struggles and experiences.",
  }, 
  {
    id: "2",
    img: Portfolio,
    name: "Portfolio Website",
    live: "https://singhaayush5.netlify.app/",
    source: "https://github.com/singhaayush5/portfolio",
    description:  
        "A Personal Portfolio website made completely using ReactJS and TailwindCSS. Also used EmailJS to implement contact messaging feature and ParticleJS for designing an animated background.",
  },
  {
    id: "3",
    img: Library,
    name: "Library Management System",
    live: null,
    source: "https://github.com/singhaayush5/lib-mgmt-sys",
    description:  
        "Developing a web application to ease the process of borrowing and returning books along with requesting for a library card in a university library. Used ReduxJS for state management and MongoDB Atlas as the database in the application. API Routing in the backend implemented using the REST architecture",
  },

  

];

export default ProjectsData