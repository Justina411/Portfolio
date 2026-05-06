import React from 'react'
import Navbar from '../components/Navbar'

import delish from '../../public/delish_haven.png'
import brownie from '../../public/Brownie.png'
import snowell from '../../public/snowell_electric.png'
import trustmed from '../../public/Trustmed.png'

const projects = [
  {
    name: 'Delish Haven',
    image: delish,
    link: 'https://delish-84jc.vercel.app/'
  },
  {
    name: 'Brownie',
    image: brownie,
    link: 'https://brownie-bag.vercel.app/'
  },
  {
    name: 'Snowell Electric',
    image: snowell,
    link: 'https://snowell-electric.vercel.app/'
  },
  {
    name: 'Trustmed',
    image: trustmed,
    link: 'https://www.figma.com/proto/Piw3jVG2paalP73mVsX0L5/Team-C?node-id=63-567&viewport=324%2C148%2C0.11&t=qYQUQ2nUUYMO13qS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=445%3A1756&show-proto-sidebar=1&page-id=0%3A1'
  }
]

const Viewproject = () => {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen text-white flex items-center justify-center overflow-x-hidden">

   
        <div className="absolute inset-0 bg-[#0b0b0b]"></div>
        <div className="absolute inset-0 bg-linear-to-br from-black via-[#1a1a1a] to-orange-500/20"></div>

        <div className="absolute top-10 -right-25 w-100 h-100 bg-orange-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 -left-25 w-100 h-100 bg-orange-600/20 blur-[120px] rounded-full"></div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-24 px-6">

          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-65 h-65 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-between">

               
                <div className="px-4 pt-4 text-sm text-white/80 font-medium">
                  {project.name}
                </div>

               
                <div className="w-full h-[65%] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>

              </div>
            </a>
          ))}

        </div>
      </section>
    </>
  )
}

export default Viewproject
