import Landing from './components/Landing';
import Contact from './components/Contact';
import Education from './components/EducationTimeline';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Background from './Layout/Background';
import Footer from './components/Footer';

function App() {

  return (
    <Background>
      <div className='font-poppins select-none text-black bg-white dark:bg-[#2E1342] dark:text-white  transition duration-500'>
        <Navbar />
        <Landing />
        <Education />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </Background>
  )
}

export default App