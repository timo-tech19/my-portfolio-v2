import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

const links = [
  {
    id: 0,
    title: 'Home',
    href: '/',
  },
  {
    id: 1,
    title: 'About',
    href: '/about',
  },
  {
    id: 2,
    title: 'Projects',
    href: '/projects',
  },
  {
    id: 3,
    title: 'Contact',
    href: '/contact',
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
    <div className="fixed bottom-2 left-2 -z-10">
      <ul>
        {links.map(({ title, href }, i) => (
          <li key={i}>
            <Link href={href}>
              <div
                className={`mb-4 flex cursor-pointer items-center text-sm font-black uppercase text-white transition-all ${
                  router.pathname === href ? '' : 'opacity-50'
                }`}
              >
                <span>{`0${i + 1}`}</span>
                <span
                  className={`mx-4 transition-all ${
                    router.pathname === href ? 'w-20' : 'w-8'
                  } border-t-2 border-t-white`}
                />
                <span>{title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* Socials */}
      <ul className="mt-8 flex">
        {socials.map(({ id, name, url, Icon }) => (
          <li key={id} className="mr-4">
            <Link href={url}>
              <div className="flex cursor-pointer p-1 text-lg font-bold text-white">
                <span>{name}</span>
                <Icon className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
