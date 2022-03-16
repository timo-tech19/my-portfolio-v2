import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <div className="flex h-full w-full flex-col pt-16">
      {/* Header line and name */}
      <div className="flex items-center justify-between">
        <div className="mr-8 grow border-t-2 border-t-white opacity-30" />
        <h1 className="text-4xl font-black uppercase text-white ">
          <span>Timo</span> <span className="text-secondary">Heman</span>
        </h1>
      </div>

      {/* Big title */}
      <div className="mt-16">
        <h2 className="mx-auto flex w-11/12 flex-col text-4xl font-bold text-white md:text-8xl">
          <span className="self-start">Front-End</span>
          <span className="self-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl uppercase text-transparent md:text-8xl ">
            Web
          </span>
          <span className="self-end">Developer</span>
        </h2>
      </div>

      <div className="mx-auto">
        <Link href="mailto:timoheman16@gmail.com">
          <button
            type="button"
            className=" mx-auto mt-8 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 uppercase text-white"
          >
            Work With Me
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
