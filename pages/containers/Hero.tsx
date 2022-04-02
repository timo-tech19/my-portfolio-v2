import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

function Hero() {
  const topLine = useAnimation()
  const topName = useAnimation()
  const titleLeft = useAnimation()
  const titleRight = useAnimation()
  const titleCenter = useAnimation()
  const btn = useAnimation()

  async function sequence() {
    await topLine.start({ width: '100%', transition: { duration: 0.3 } })
    topName.start({ opacity: 1, x: 0 })
    titleCenter.start({ scale: 1, opacity: 1 })
    titleLeft.start({ x: 0, opacity: 1 })
    titleRight.start({ x: 0, opacity: 1 })
    btn.start({ y: 0, scale: 1, opacity: 1 })
  }

  useEffect(() => {
    sequence()
  }, [])

  return (
    <>
      <header
        className="flex h-[90vh] w-full snap-start flex-col pt-16 md:h-screen"
        id="home"
      >
        {/* Header line and name */}
        <div className="flex items-center justify-between">
          <div className="mr-8 grow">
            <motion.div
              animate={topLine}
              initial={{ width: '0%' }}
              className="border-t-2 border-t-white opacity-30"
            />
          </div>
          <motion.h1
            animate={topName}
            initial={{ opacity: 0, x: -100 }}
            className="text-4xl font-black uppercase text-white "
          >
            <span>Timo</span> <span className="text-secondary">Heman</span>
          </motion.h1>
        </div>

        {/* Big title */}
        <div className="flex grow flex-col justify-center">
          <motion.h2 className="mx-auto mt-12 flex w-11/12 flex-col text-center text-5xl font-bold text-white md:mt-8 md:text-8xl">
            <motion.span
              animate={titleLeft}
              initial={{ x: 100, opacity: 0 }}
              className="md:self-start"
            >
              Front-End
            </motion.span>
            <motion.span
              animate={titleCenter}
              initial={{ scale: 0.6, opacity: 0 }}
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-7xl uppercase text-transparent md:self-center md:text-8xl "
            >
              Web
            </motion.span>
            <motion.span
              animate={titleRight}
              initial={{ x: -100, opacity: 0 }}
              className="md:self-end"
            >
              Developer
            </motion.span>
          </motion.h2>
          <Link href="mailto:timoheman16@gmail.com">
            <a className="mx-auto w-fit">
              <motion.button
                onClick={() => console.log('clicked')}
                animate={btn}
                initial={{ opacity: 0, scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ y: 2 }}
                type="button"
                className="mx-auto mt-16 -translate-y-96 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 uppercase text-white hover:opacity-0 md:mt-8"
              >
                Work With Me
              </motion.button>
            </a>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Hero
