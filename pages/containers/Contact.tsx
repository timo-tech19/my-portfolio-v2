import { useAnimation, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Section from '../components/Section'

function Contact() {
  const { ref, inView } = useInView({ threshold: 0.5 })
  const header = useAnimation()
  const text = useAnimation()
  const btn = useAnimation()

  const sequenceIn = async () => {
    await header.start({ y: 0, opacity: 1 })
    await text.start({ x: 0, opacity: 1 })
    btn.start({ opacity: 1 })
  }

  const sequenceOut = async () => {
    header.start({ y: -100, opacity: 0 })
    text.start({ x: -100, opacity: 0 })
    btn.start({ opacity: 0 })
  }

  useEffect(() => {
    if (inView) {
      sequenceIn()
    } else {
      sequenceOut()
    }
  }, [inView])

  return (
    <>
      <Section title="Contact" num="04" id="contact" el={ref}>
        <div className="mx-auto mt-16 w-3/4 text-center md:w-1/2 ">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={header}
            className="mb-4 text-3xl font-black uppercase"
          >
            Let's work together!
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={text}
            className="mb-8"
          >
            Looking for a front end dev for your team? You can reach out to me
            via email by clicking the button below. I'm also open to making
            friends and meeeting awesome people. Be sure to check out my socials
            below.
          </motion.p>
          <Link href="mailto:timoheman16@gmail.com">
            <a>
              <motion.button
                initial={{ opacity: 0 }}
                animate={btn}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ y: 2 }}
                type="button"
                className="mx-auto mt-8 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-2xl uppercase text-white"
              >
                Work With Me
              </motion.button>
            </a>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default Contact
