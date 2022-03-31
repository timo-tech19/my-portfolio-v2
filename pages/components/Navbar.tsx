import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { GiNotebook } from 'react-icons/gi'
import { MdConnectWithoutContact } from 'react-icons/md'
import { FaProjectDiagram } from 'react-icons/fa'

const links = [
  {
    id: 0,
    title: 'Home',
    href: '/',
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
        {/* <li>
          <Link href="#home">
            <a>
              <div
                className={`group mb-8 flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black shadow-xl transition-all duration-300 hover:w-24 hover:bg-primary`}
              >
                <AiFillHome className="text-xl text-white" />
                <p className="ml-2 hidden duration-300 group-hover:block group-hover:opacity-100">
                  Home
                </p>
              </div>
            </a>
          </Link>
        </li> */}
        {links.map(({ title, href, Icon }, i) => (
          <li>
            <Link href={href}>
              <a>
                <div
                  className={`group mb-8 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black shadow-xl transition-all duration-300 hover:w-24 hover:bg-primary`}
                >
                  <Icon className="text-xl text-white" />
                  <p className="ml-2 hidden duration-300 group-hover:block group-hover:opacity-100">
                    {title}
                  </p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {/* Socials */}
      <ul className="mt-4 flex flex-col items-center justify-center">
        {socials.map(({ id, name, url, Icon }) => (
          <li key={id}>
            <Link href={url}>
              <a target="_blank">
                <div className="flex cursor-pointer p-1 text-lg font-bold text-white">
                  {/* <span>{name}</span> */}
                  <Icon className="mb-2 h-6 w-6" />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
