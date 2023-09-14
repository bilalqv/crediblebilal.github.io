// src/App.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import About from './components/About';

// less than 950 -> mobile
// 950 - 1360 -> left margin

// md:max-lg:ml-[50px]

// 355 px -> phone error R5 upto 480px

const App = () => {


  const [activeSection, setActiveSection] = useState('home');
  const [selectedSection, setSelectedSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'achievements', 'contact'];
      const mapp = {
        home: 0, about: 1, experience: 2, projects: 3, achievements: 4, contact: 5
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        const sectionRect = section.getBoundingClientRect();

        if (sectionRect.top <= 50 && sectionRect.bottom >= 50) {
          setActiveSection(sectionId);
          setSelectedSection(mapp[sectionId]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <section className="flex bg-black text-white">
      <Navbar  selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <main className="flex-1 p-0 min-[950px]:max-[1360px]:ml-[30px] max-[500px]:text-sm  ">
        <section id="home" className=' min-h-screen '>
          <Home />
        </section>
        <section id="about" className='   '>
          <About />
        </section>
        <section id="experience" className='  '>
          <Experience />
        </section>
        <section id='projects' className='  '>
          <Projects />
        </section>
        <section id="achievements" className='  '>
          <Achievements />
        </section>
        <section id="contact" className='  '>
          <Contact />
        </section>
      </main>
    </section>
  );
};

export default App;