import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer() {
  //smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>
          Aakriti Tyagi
        </h2>

        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 cursor-po'>
          {[
            {name: "About", id: "about"},
            {name: "Skills", id: "skills"},
            {name: "Experience", id: "experience"},
            {name: "Work", id: "work"},
            {name: "Education", id: "education"},
          ].map((item, index) => (
            <button
            key={index}
            onClick={() => handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer'>
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social media icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aakriti-tyagi-a9b017252/" },,
            { icon: <FaGithub />, link: "https://github.com/aakritity0212" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer