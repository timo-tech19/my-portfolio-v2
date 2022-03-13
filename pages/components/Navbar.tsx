import Link from 'next/link'
import React, { useState } from 'react'

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

function Navbar() {
  const [activeLink, setActiveLink] = useState(3)

  return (
    <div className="fixed bottom-4 left-16">
      <ul>
        {links.map(({ title, href }, i) => (
          <li key={i}>
            <Link href="#home">
              <div
                className={`mb-4 flex items-center font-bold uppercase text-white ${
                  activeLink !== i ? 'opacity-50' : ''
                }`}
              >
                <span>{`0${i + 1}`}</span>
                <span
                  className={`mx-4 ${
                    activeLink === i ? 'w-20' : 'w-8'
                  } border-t-2 border-t-white`}
                />
                <span>{title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
