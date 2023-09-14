import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBars,  faHouse, faBriefcase, faAddressCard, faListCheck, faTrophy, faMessage } from '@fortawesome/free-solid-svg-icons';
import { AiFillHome } from 'react-icons/ai';

const NavbarFull1 = ({selectedSection,  setSelectedSection }) => {

  const handleIconClick = (index) => {
    setSelectedSection(index);
  };


  return (
    <div className="fixed left-0 top-0 h-full text-white p-0 flex flex-col justify-center ml-1 bg-opacity-0">

      <Link to="home" smooth={true}
        className={`navbar-icon my-1`}
        onClick={() => handleIconClick(0)}
      >
        {/* <i className={`fas fa-home ${selectedSection == 0 ? 'selected-icon' : ''} `} /> */}
        <FontAwesomeIcon icon={faHouse} className={` p-4 rounded-full ${selectedSection == 0 ? 'selected-icon' : ''} `} />
        <span className="navbar-text">Home</span>
      </Link>
      <Link to="about" smooth={true}
        className={`navbar-icon my-1`}
        onClick={() => handleIconClick(1)}
      >
        {/* <i className={`fas fa-user ${selectedSection == 1 ? 'selected-icon' : ''} `} /> */}
        <FontAwesomeIcon icon={faAddressCard} className={` p-4 rounded-full ${selectedSection == 1 ? 'selected-icon' : ''} `} />

        <span className="navbar-text">About</span>
      </Link>
      <Link to="experience" smooth={true}
        className={`navbar-icon my-1`}
        onClick={() => handleIconClick(2)}
      >
        {/* <i className={`fas fa-envelope ${selectedSection == 2 ? 'selected-icon' : ''} `} /> */}
        <FontAwesomeIcon icon={faBriefcase} className={` p-4 rounded-full ${selectedSection == 2 ? 'selected-icon' : ''} `} />
        <span className="navbar-text">Experience</span>
      </Link>
      <Link to="projects" smooth={true}
        className={`navbar-icon my-1`}
        onClick={() => handleIconClick(3)}
      >
        {/* <i className={`fas fa-home ${selectedSection == 3 ? 'selected-icon' : ''} `} /> */}
        <FontAwesomeIcon icon={faListCheck} className={` p-4 rounded-full ${selectedSection == 3 ? 'selected-icon' : ''} `} />
        <span className="navbar-text">Projects</span>
      </Link>
      <Link to="achievements" smooth={true}
        className={`navbar-icon my-1`}
        onClick={() => handleIconClick(4)}
      >
        {/* <i className={`fas fa-user ${selectedSection == 4 ? 'selected-icon' : ''} `} /> */}
        <FontAwesomeIcon icon={faTrophy} className={` p-4 rounded-full ${selectedSection == 4 ? 'selected-icon' : ''} `} />
        <span className="navbar-text">Achievements</span>
      </Link>
      <Link to="contact" smooth={true}
        className={`navbar-icon my-1`}
        onClick={() => handleIconClick(5)}
      >
        {/* <i className={`fas fa-envelope ${selectedSection == 5 ? 'selected-icon' : ''} `} /> */}
        <FontAwesomeIcon icon={faMessage} className={` p-4 rounded-full ${selectedSection == 5 ? 'selected-icon' : ''} `} />
        <span className="navbar-text">Contact</span>
      </Link>
    </div>
  );
};

export default NavbarFull1;