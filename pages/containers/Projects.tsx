import React from 'react'
import Section from '../components/Section'

const projects = [
  {
    title: 'ShareMe',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur vero excepturi asperiores est cum dolore, debitis facilis harum.',
  },
  {
    title: 'Netflix Clone',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur vero excepturi asperiores est cum dolore, debitis facilis harum.',
  },
  {
    title: 'Natours',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur vero excepturi asperiores est cum dolore, debitis facilis harum.',
  },
]

function Projects() {
  return (
    <Section title="Projects" num="03">
      <div className="flex">
        <div className="w-1/2">
          <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            eveniet ipsum perferendis recusandae placeat velit possimus omnis
            commodi ducimus, facere animi tempora aliquid sequi sed fuga laborum
            laudantium aliquam reprehenderit.
          </p>
        </div>
        <div className="w-1/2">
          {projects.map(({ title, description }, i) => (
            <div key={i} className="mb-4 w-3/4 scale-110 bg-black p-4">
              <h3 className="mb-2 text-xl font-bold">
                {`0${i + 1}`} - {title}
              </h3>
              <div
                className={`mb-2 w-16 border-2 ${
                  i % 2 === 0 ? 'border-secondary' : 'border-primary'
                }`}
              />
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects
