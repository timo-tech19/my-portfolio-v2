import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'

function About() {
  return (
    <Layout>
      <Section title="About" num="02">
        <div className="flex">
          <div className="mb-2 w-1/2">
            <p className="pr-8 leading-relaxed">
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
            <ul className="mt-4 flex w-full flex-wrap px-8">
              <li className="mb-2 w-1/2">React</li>
              <li className="mb-2 w-1/2">JavaScript</li>
              <li className="mb-2 w-1/2">TypeScript</li>
              <li className="mb-2 w-1/2">TailWind CSS</li>
              <li className="mb-2 w-1/2">GraphQL</li>
              <li className="mb-2 w-1/2">Express</li>
            </ul>
          </div>
          <div className="flex w-1/2 items-center justify-center">
            <div className="relative h-[25rem] w-[25rem]">
              <div className="absolute h-full w-full rotate-2 bg-gradient-to-br from-primary to-secondary"></div>
              <div className="absolute h-full w-full bg-black"></div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default About
