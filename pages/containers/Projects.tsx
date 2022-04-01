import React, { useState } from 'react'
import Link from 'next/link'
import Section from '../components/Section'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'ShareMe',
    description:
      'Full stack social media project for sharing photos with world. Equip with Google Authenication and a Sanity.io backend',
    stack: ['React', 'TypeScript', 'Sanity', 'TailWind'],
    url: 'http://timotech-shareme.netlify.app/',
    github: 'https://github.com/timo-tech19/ShareMe',
    img: 'https://i.ibb.co/VCSFc8N/share-final.png',
  },
  {
    title: 'Netflix Clone',
    description:
      'Neflix clone project for streaming movies. Google and Email authenication using Firebase backend',
    stack: ['React', 'Firebase', 'ContextAPI', 'Styled-Components'],
    url: 'https://mflix-live.netlify.app/',
    github: 'https://github.com/timo-tech19/netflix-clone',
    img: 'https://i.ibb.co/4fm5ZVK/netflix.webp',
  },
  {
    title: 'Natours',
    description:
      'Web application for booking tours into natour. Has email authentication, stripe intergration for payments ',
    stack: ['JavaScript', 'Express', 'Node', 'Mongoose'],
    url: 'http://natours-course-app.herokuapp.com/',
    github: 'https://github.com/timo-tech19/natours',
    img: 'https://i.ibb.co/SfcmV40/natours.webp',
  },
]

type Project = {
  title: string
  description: string
  stack: string[]
  url: string
  github: string
  img: string
}

function Projects() {
  const [background, setBackground] = useState('')
  const [project, setProject] = useState<Project | null>(null)

  const handleClick = (project: Project) => {
    setBackground(project.img)
    setProject(project)
  }

  return (
    <>
      <Section title="Projects" num="03" id="projects" bg={background}>
        <div className="z-10 flex h-full flex-col md:flex-row">
          <div className="mb-8 w-full md:mb-0 md:w-1/2">
            {project ? (
              <div className="px-2 text-center md:w-3/4 md:pl-16 md:text-left">
                <h3 className="mb-4 text-4xl font-bold">{project.title}</h3>
                <div
                  className={`mx-auto mb-2 w-16 border-t-4 border-secondary md:mx-0`}
                />
                <p className="mb-2">{project.description}</p>
                <ul className="mb-4 flex flex-wrap justify-center md:justify-start">
                  {project.stack.map((tech) => (
                    <li className="mr-2 mb-2 bg-[#333] px-2 py-1 uppercase">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start">
                  <Link href={project.url}>
                    <a target="_blank">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ y: 2 }}
                        className="mr-4 flex w-32 justify-center rounded-full border-2 border-secondary py-2 transition-colors duration-300 hover:bg-secondary"
                      >
                        Live Preview
                      </motion.button>
                    </a>
                  </Link>
                  <Link href={project.github}>
                    <a target="_blank">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ y: 2 }}
                        className="flex w-32 justify-center rounded-full border-2 border-primary py-2 transition-colors duration-300 hover:bg-primary"
                      >
                        Github
                      </motion.button>
                    </a>
                  </Link>
                </div>
              </div>
            ) : (
              <p className="text-center md:w-3/4 md:text-left">
                Here are a few of my personal projects. I really enjoyed
                building these. Click on the cards to view. If you are on
                mobile, tab on the numbers.
              </p>
            )}
          </div>
          <div className="flex w-full items-center justify-center md:w-1/2 md:flex-col">
            {projects.map((proj, i) => {
              const { title, description } = proj
              const isSelected = proj.title === project?.title
              return (
                <motion.div
                  key={i}
                  onClick={() => handleClick(proj)}
                  className="mb-4 mr-4 scale-110 cursor-pointer rounded-full bg-black p-4 hover:bg-gradient-to-br hover:from-primary hover:to-secondary md:w-2/4 md:rounded-none md:hover:bg-none"
                  animate={isSelected ? { scale: 1.1 } : { scale: 1 }}
                  whileHover={!isSelected ? { scale: 1.05 } : undefined}
                >
                  <h3 className="flex h-10 w-10 items-center justify-center text-xl font-bold md:mb-2 md:block md:h-auto md:w-auto">
                    <span>{`0${i + 1}`}</span>
                    <span className="hidden md:inline"> - {title}</span>
                  </h3>
                  <div
                    className={`mb-2 hidden w-16 border-t-4 md:block ${
                      i % 2 === 0 ? 'border-secondary' : 'border-primary'
                    }`}
                  />
                  <p className="hidden text-sm md:block">{description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>
    </>
  )
}

export default Projects
