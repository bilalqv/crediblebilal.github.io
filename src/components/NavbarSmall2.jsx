
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RxCross2 } from 'react-icons/rx';
import { IoMenu } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import { FaAddressCard } from 'react-icons/fa';
import { BiSolidBriefcase, BiSolidTrophy } from 'react-icons/bi';
import { FaListCheck } from 'react-icons/fa6';
import { BsFillChatSquareFill } from 'react-icons/bs';

const NavbarSmall2 = ({ selectedSection, setSelectedSection }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleIconClick = (index) => {
    setSelectedSection(index);
    if (window.innerWidth <= 950) {
      setNavbarOpen(false); // Close navbar after clicking an icon on smaller screens
    }
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      {/* Mobile toggle button */}
      <div
        className="fixed top-4 right-4 text-red cursor-pointer min-[950px]:hidden "
        onClick={toggleNavbar}
      >
        {navbarOpen ? (
          <RxCross2 className='text-white' />
        ) : (
          <IoMenu className='text-white' />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:left-0 top-0 w-56 h-full bg-gray-800 text-white p-4 flex flex-col justify-center transition-transform ${navbarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
      >
        <Link to="home" smooth={true} className={`navbar-icon-small-2 my-3 ${selectedSection === 0 ? 'selected-icon-small-2' : ''}`}
          onClick={() => handleIconClick(0)}>
          <AiFillHome className='' />
          <span className="navbar-text-small-2">Home</span>
        </Link>
        <Link to="about" smooth={true} className={`navbar-icon-small-2 my-3 ${selectedSection === 1 ? 'selected-icon-small-2' : ''}`}
          onClick={() => handleIconClick(1)}>
          <FaAddressCard className='' />
          <span className="navbar-text-small-2">About</span>
        </Link>
        <Link to="experience" smooth={true} className={`navbar-icon-small-2 my-3 ${selectedSection === 2 ? 'selected-icon-small-2' : ''}`}
          onClick={() => handleIconClick(2)}>
          {/* <i className={`fas fa-home `} /> */}
          <BiSolidBriefcase />
          <span className="navbar-text-small-2">Experience</span>
        </Link>
        <Link to="projects" smooth={true} className={`navbar-icon-small-2 my-3  ${selectedSection === 3 ? 'selected-icon-small-2' : ''}`}
          onClick={() => handleIconClick(3)}>
          {/* <i className={`fas fa-user `} /> */}
          <FaListCheck />
          <span className="navbar-text-small-2">Projects</span>
        </Link>
        <Link to="achievements" smooth={true} className={`navbar-icon-small-2 my-3 ${selectedSection === 4 ? 'selected-icon-small-2' : ''}`}
          onClick={() => handleIconClick(4)}>
          {/* <i className={`fas fa-home `} /> */}
          <BiSolidTrophy />
          <span className="navbar-text-small-2">Achievements</span>
        </Link>
        <Link to="contact" smooth={true} className={`navbar-icon-small-2 my-3  ${selectedSection === 5 ? 'selected-icon-small-2' : ''}`}
          onClick={() => handleIconClick(5)}>
          {/* <i className={`fas fa-user `} /> */}
          <BsFillChatSquareFill />
          <span className="navbar-text-small-2">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarSmall2;
