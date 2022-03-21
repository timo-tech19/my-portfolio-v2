import React from 'react'

interface Props {
  children?: React.ReactNode
  title: string
  num: string
}
function Section({ children, title, num }: Props) {
  console.log(num)
  return (
    <section className="h-screen pt-8">
      <div className="mb-8 flex items-center">
        <h3
          className={`relative px-2 text-4xl font-black uppercase tracking-wider before:absolute before:-right-20 before:-top-8 before:text-8xl before:font-black  before:opacity-10 before:content-['${num}']`}
        >
          <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-primary to-secondary" />
          <span className="relative z-10 inline-block">{title}</span>
        </h3>
        <div className="ml-24 grow border-t-2 border-t-white opacity-30" />
      </div>
      {children}
    </section>
  )
}

export default Section
