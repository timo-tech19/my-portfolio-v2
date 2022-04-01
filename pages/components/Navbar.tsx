import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { motion } from 'framer-motion'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { GiNotebook } from 'react-icons/gi'
import { MdConnectWithoutContact } from 'react-icons/md'
import { FaProjectDiagram } from 'react-icons/fa'

const links = [
  {
    id: 0,
    title: 'Home',
    href: '#home',
    Icon: AiFillHome,
  },
  {
    id: 1,
    title: 'About',
    href: '#about',
    Icon: GiNotebook,
  },
  {
    id: 2,
    title: 'Projects',
    href: '#projects',
    Icon: FaProjectDiagram,
  },
  {
    id: 3,
    title: 'Contact',
    href: '#contact',
    Icon: MdConnectWithoutContact,
  },
]

const socials = [
  {
    id: 0,
    name: 'Twitter',
    url: 'https://twitter.com/timo__tech',
    Icon: BsTwitter,
  },
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/timo-tech19',
    Icon: BsGithub,
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/timo-heman-002302160',
    Icon: BsLinkedin,
  },
]

function Navbar() {
  const router = useRouter()

  return (
    <div className="fixed top-0 left-2 z-10 flex h-full flex-col items-start justify-end">
      <ul>
        {links.map(({ title, href, Icon }, i) => (
          <motion.li
            key={i}
            initial={{ x: -100 }}
            animate={{
              x: 0,
              transition: { delay: i * 0.1 },
            }}
          >
            <Link href={href}>
              <a>
                <div
                  className={`group mb-8 flex h-10 w-10 cursor-pointer items-center justify-start overflow-hidden rounded-full bg-black p-2 shadow-xl transition-all duration-300 hover:w-32 hover:bg-primary`}
                >
                  <Icon className="text-xl text-white" />
                  <p className="ml-2 hidden uppercase duration-300 group-hover:block group-hover:opacity-100">
                    {title}
                  </p>
                </div>
              </a>
            </Link>
          </motion.li>
        ))}
      </ul>
      {/* Socials */}
      <ul className="mt-4 flex flex-col items-center justify-center">
        {socials.map(({ id, name, url, Icon }, i) => (
          <motion.li
            key={id}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: i * 0.1 },
            }}
            whileHover={{ rotate: '360deg', transition: { stiffness: 60 } }}
          >
            <Link href={url}>
              <a target="_blank">
                <div className="flex cursor-pointer p-1 text-lg font-bold text-white">
                  {/* <span>{name}</span> */}
                  <Icon className="mb-2 h-6 w-6" />
                </div>
              </a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
