import React, { useState, useEffect } from 'react';
import NavbarFull1 from './NavbarFull1';
import NavbarSmall2 from './NavbarSmall2';

const Navbar = ({ selectedSection, setSelectedSection }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [selectedSection, setSelectedSection] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setSelectedSectionHandler = (index) => {
    setSelectedSection(index);
  }

  return (
    <div className=''>
      {windowWidth <= 950 ? (
        <NavbarSmall2 selectedSection={selectedSection} setSelectedSection={setSelectedSectionHandler} />
      ) : (
        <NavbarFull1  selectedSection={selectedSection}  setSelectedSection={setSelectedSection} /> 
      )}
    </div>
  );
};

export default Navbar;
