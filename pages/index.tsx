import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from './containers/Hero'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-dark px-16">
      <Hero />
    </div>
  )
}

export default Home
