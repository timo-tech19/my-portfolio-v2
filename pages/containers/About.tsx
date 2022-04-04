import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaReact } from 'react-icons/fa'
import {
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { useInView } from 'react-intersection-observer'
import Section from '../components/Section'
import me from '../../public/timo.jpg'

function About() {
  const { ref, inView } = useInView({ threshold: 0.5 })
  const text = useAnimation()
  const stack = useAnimation()
  const image = useAnimation()
  const imageBackground = useAnimation()

  const sequenceIn = async () => {
    imageBackground.start({ scale: 1, opacity: 1, rotate: 2 })
    await image.start({ scale: 1, opacity: 1 })
    text.start({ y: 0, opacity: 1 })
    stack.start({ opacity: 1 })
  }

  const sequenceOut = async () => {
    imageBackground.start({ scale: 0.6, opacity: 0, rotate: 360 })
    image.start({ scale: 0.6, opacity: 0 })
    text.start({ y: 200, opacity: 0 })
    stack.start({ opacity: 0 })
  }

  useEffect(() => {
    if (inView) {
      sequenceIn()
    } else {
      sequenceOut()
    }
  }, [inView])

  // const sequence = async () => {
  //   controls.start({ y: 0, opacity: 1 })
  // }

  // const reverse = async () => {
  //   controls.start({ y: -10, opacity: 0 })
  // }

  return (
    <>
      <Section title="About" num="02" id="about" el={ref}>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="mb-2 md:w-1/2">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={text}
              className="text-center text-sm leading-relaxed md:p-8 md:pr-8 md:text-left md:text-base"
            >
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
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={stack}
              className="mx-auto mt-4 flex w-full flex-wrap justify-center px-8"
            >
              <motion.li
                initial={{ opacity: 0 }}
                animate={stack}
                transition={{ delay: 0.2 }}
                className="mb-2 flex w-1/2 items-center"
              >
                <FaReact className="mr-4 h-6 w-6 text-[#61DBFB]" /> React
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={stack}
                transition={{ delay: 0.3 }}
                className="mb-2 flex w-1/2 items-center"
              >
                <SiJavascript className="mr-4 h-6 w-6 text-[#F7DF1E]" />{' '}
                JavaScript
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={stack}
                transition={{ delay: 0.4 }}
                className="mb-2 flex w-1/2 items-center"
              >
                <SiTypescript className="mr-4 h-6 w-6 text-[#1976D2]" />{' '}
                TypeScript
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={stack}
                transition={{ delay: 0.5 }}
                className="mb-2 flex w-1/2 items-center"
              >
                <SiTailwindcss className="mr-4 h-6 w-6 text-[#6DD7B9]" />{' '}
                TailWind CSS
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={stack}
                transition={{ delay: 0.6 }}
                className="mb-2 flex w-1/2 items-center"
              >
                <SiGraphql className="mr-4 h-6 w-6 text-[#FF4081]" /> GraphQL
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={stack}
                transition={{ delay: 0.7 }}
                className="mb-2 flex w-1/2 items-center"
              >
                <SiExpress className="mr-4 h-6 w-6 text-white" /> Express
              </motion.li>
            </motion.ul>
          </div>
          <div className="mb-8 flex items-center justify-center md:w-1/2">
            <div className="relative h-[10rem] w-[10rem] md:h-[25rem] md:w-[25rem]">
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: 360 }}
                transition={{ stiffness: 25 }}
                animate={imageBackground}
                className="absolute h-full w-full rotate-2 bg-gradient-to-br from-primary to-secondary"
              ></motion.div>
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={image}
                className="absolute h-full w-full"
              >
                <Image
                  src={me}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default About
