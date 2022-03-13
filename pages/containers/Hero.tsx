import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col pt-16">
      {/* Header line and name */}
      <div className="flex items-center justify-between">
        <div className="mr-8 grow border-t-2 border-t-white" />
        <h1 className="text-4xl font-black uppercase text-white ">
          <span>Timo</span> <span className="text-secondary">Heman</span>
        </h1>
      </div>

      {/* Big title */}
      <div className="">
        <h2 className="flex flex-col text-8xl font-bold text-white">
          <span className="self-start">Front-End</span>
          <span className="text-transparent self-center bg-gradient-to-r from-primary to-secondary bg-clip-text uppercase ">
            Web
          </span>
          <span className="self-end">Developer</span>
        </h2>
      </div>
    </div>
  )
}

export default Hero
