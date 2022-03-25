import React, { useState } from 'react'
import Link from 'next/link'
import Layout from './components/Layout'
import Loading from './components/Loading'

function Hero() {
  const [loading, setLoading] = useState(true)

  if (loading) return <Loading onComplete={() => setLoading(false)} />

  return (
    <Layout>
      <header className="flex h-full w-full flex-col pt-16">
        {/* Header line and name */}
        <div className="flex items-center justify-between">
          <div className="mr-8 grow border-t-2 border-t-white opacity-30" />
          <h1 className="text-4xl font-black uppercase text-white ">
            <span>Timo</span> <span className="text-secondary">Heman</span>
          </h1>
        </div>

        {/* Big title */}
        <div className="mt-8">
          <h2 className="mx-auto mt-12 flex w-11/12 flex-col text-center text-5xl font-bold text-white md:mt-8 md:text-8xl">
            <span className="md:self-start">Front-End</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-7xl uppercase text-transparent md:self-center md:text-8xl ">
              Web
            </span>
            <span className="md:self-end">Developer</span>
          </h2>
        </div>

        <div className="mx-auto">
          <Link href="mailto:timoheman16@gmail.com">
            <button
              type="button"
              className="mx-auto mt-16 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 uppercase text-white md:mt-8"
            >
              Work With Me
            </button>
          </Link>
        </div>
      </header>
    </Layout>
  )
}

export default Hero
