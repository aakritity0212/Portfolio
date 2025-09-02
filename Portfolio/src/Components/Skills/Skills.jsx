import React from 'react';
import {SkillsInfo} from '../../constants.js';
import Tilt from 'react-parallax-tilt'

function Skills() {
  return (
    <section
    id='skills'
    className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom'
    style={{
      backgroundImage:
      'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)'
    }}>
      {/* Section Title */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A collection of my technical skills and expertise honed through various projects and experiences</p>
      </div>

      {/* Skills Categories */}
      <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
        {SkillsInfo.map((category) => (
          <div
          key={category.title}
          className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
            <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>
              {category.title}
            </h3>

            {/* Skill Items - 3 per row on larger screens */}
            <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-transparent border border-gray-700 rounded-xl p-3 transition"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-2"
                    />
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 text-center break-words">
                      {skill.name}
                    </span>
                  </div>
                  ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills