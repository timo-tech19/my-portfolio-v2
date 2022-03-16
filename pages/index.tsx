import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Hero from './containers/Hero'

const Home: NextPage = () => {
  return (
    <div className="relative mx-auto min-h-screen max-w-[1270px] bg-dark px-2">
      <Hero />
      <Navbar />
      <Logo />
    </div>
  )
}

export default Home
