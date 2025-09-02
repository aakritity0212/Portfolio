import React, { useEffect, useState } from 'react'
import {FiMenu} from 'react-icons/fi';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const[isOpen, setIsOpen] = useState(false);
  const[activeSection, setActiveSection] = useState("");
  const[isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, [])

  //Smooth scroll functionality
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  }

  const menuItems = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "experience", label: "Experience"},
    {id: "work", label: "Work"},
    {id: "education", label: "Education"}
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
      isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className='text-white py-5 flex justify-between items-center'>

        {/* Logo */}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Aakriti</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Tyagi</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        <ul className=' hidden md:flex space-x-8 text-gray-300'>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`
                  cursor-pointer hover:text-[#8245ec] 
                  ${activeSection === item.id ? "text-[#8245ec]" : ""}
                `}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex space-x-4'>
          <a 
          href="https://github.com/aakritity0212"
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:text-[#8245ec]'>
            <FaGithub size={24}/>
          </a>
          <a 
          href="https://www.linkedin.com/in/aakriti-tyagi-a9b017252/"
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:text-[#8245ec]'>
            <FaLinkedin size={24}/>
          </a>
        </div>

        {/*Mobile Menu Icons*/}
        <div className='md:hidden'>
          {
            isOpen ? (
              <IoMdClose className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(false)}/>
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(true)}/>
            )
          }
        </div>
      </div>

      {/*Mobile Menu Items*/}
      {isOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 
        bg-[#0a0a0a]/60 backdrop-blur-lg backdrop-saturate-150 
        rounded-lg shadow-lg border border-white/10 md:hidden'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-200'>
            {menuItems.map((item) => (
              <li key={item.id}>
                  <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className={
                    `cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""}`
                  }>
                    {item.label}
                  </button>
              </li>
            ))}

            <div className='flex space-x-4'>
              <a 
              href="https://github.com/aakritity0212"
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white'>
                <FaGithub size={24}/>
              </a>
              <a 
              href="https://www.linkedin.com/in/aakriti-tyagi-a9b017252/"
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white'>
                <FaLinkedin size={24}/>
              </a>
            </div>
          </ul>
        </div>
      )}

    </nav>
  ) 
}

export default Navbar