// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const Home = () => {
  const [changingTextIndex, setChangingTextIndex] = useState(0);
  const changingTexts = ['Software Developer', 'Problem Solver'];
  const [typedText, setTypedText] = useState('');
  const typingDelay = 100; // Adjust the delay between typing each character

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < changingTexts[changingTextIndex].length) {
        currentText += changingTexts[changingTextIndex][currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setChangingTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
        }, 2000); // Delay before switching to the next text
      }
    }, typingDelay);

    return () => clearInterval(interval);
  }, [changingTextIndex]);

  return (
    <div id="home-section" className="h-screen flex flex-col justify-center text-center ">
      <h1 className="font-bold  text-3xl max-[500px]:text-2xl max-md: content-center  md:text-4xl lg:text-5xl xl:text-6xl  animate-fade-in">Bilal Ahmad Bhat</h1>
      <div className="text-lg md:text-xl lg:text-2xl  max-md:text-center  animate-fade-in ">
        I am a <span className="changing-text "> {typedText}</span>
        <span className="cursor blink">|</span>
      </div>
      <div className='social-links flex  justify-center space-x-4    animate-fade-in '>
        <a href="https://www.linkedin.com/in/crediblebilal" target='_blank' className=' p-2 hover:bg-[#141414] rounded-md '> <SiLinkedin className='text-2xl' /> </a>
        <a href="https://www.github.com/crediblebilal" target='_blank' className=' p-2 hover:bg-[#141414] rounded-md '> <SiGithub className='text-2xl' /> </a>
      </div>
    </div>
  );
};

export default Home;