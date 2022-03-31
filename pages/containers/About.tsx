import React from 'react'
import { FaReact } from 'react-icons/fa'
import {
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import Section from '../components/Section'

function About() {
  return (
    <>
      <Section title="About" num="02" id="about">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="mb-2 md:w-1/2">
            <p className="p-8 text-center leading-relaxed md:pr-8 md:text-left">
              Hi, I'm Timo. I am a{' '}
              <span className="font-bold text-secondary">
                Self-taught Front-End Web Developer
              </span>{' '}
              with an eye for{' '}
              <span className="font-bold text-primary">
                beautiful UI design
              </span>
              . I currently work at FieldR as a Mobile Developer. I also have
              experience working with the{' '}
              <span className="font-bold text-primary">
                back-end development
              </span>
              . Web development is such a fascinating field for me and I've
              enjoyed every step of the way since I started learning more than 4
              years ago. Here are a few famous technologies I picked up along
              the way:
            </p>
            <ul className="mx-auto mt-4 flex w-3/4 flex-wrap px-8 md:w-full">
              <li className="mb-2 flex w-1/2 items-center">
                <FaReact className="mr-4 h-6 w-6 text-[#61DBFB]" /> React
              </li>
              <li className="mb-2 flex w-1/2 items-center">
                <SiJavascript className="mr-4 h-6 w-6 text-[#F7DF1E]" />{' '}
                JavaScript
              </li>
              <li className="mb-2 flex w-1/2 items-center">
                <SiTypescript className="mr-4 h-6 w-6 text-[#1976D2]" />{' '}
                TypeScript
              </li>
              <li className="mb-2 flex w-1/2 items-center">
                <SiTailwindcss className="mr-4 h-6 w-6 text-[#6DD7B9]" />{' '}
                TailWind CSS
              </li>
              <li className="mb-2 flex w-1/2 items-center">
                <SiGraphql className="mr-4 h-6 w-6 text-[#FF4081]" /> GraphQL
              </li>
              <li className="mb-2 flex w-1/2 items-center">
                <SiExpress className="mr-4 h-6 w-6 text-white" /> Express
              </li>
            </ul>
          </div>
          <div className="mb-8 flex items-center justify-center md:w-1/2">
            <div className="relative h-[10rem] w-[10rem] md:h-[25rem] md:w-[25rem]">
              <div className="absolute h-full w-full rotate-2 bg-gradient-to-br from-primary to-secondary"></div>
              <div className="absolute h-full w-full bg-black"></div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default About
