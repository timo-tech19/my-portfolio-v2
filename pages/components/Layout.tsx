import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from './Logo'
import Navbar from './Navbar'

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Looking for a front end web developer? Hi, my name is Timo Heman, I'm a web developer having experience with technologies like JavaScript(TypeScript), React, GraphQL, and Nodejs/Express. I am currently open to full time and contract roles. Let's talk😉"
        />
        <meta property="og:url" content="https://i.ibb.co/Byjp4Hp/timo.jpg" />
        <meta
          property="og:title"
          content="Timo Heman | Front End Web Developer"
        />
        <meta
          property="og:description"
          content="Looking for a front end web developer? Hi, my name is Timo Heman, I'm a web developer having experience with technologies like JavaScript(TypeScript), React, GraphQL, and Nodejs/Express. I am currently open to full time and contract roles. Let's talk😉"
        />
        <meta property="og:image" content="https://timotech.vercel.app/" />
        <title>Timo Heman | Web Developer</title>
      </Head>
      <div className="no-scrollbar relative mx-auto h-screen max-w-[1270px] snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth bg-dark px-2">
        {children}
      </div>
      <Navbar />
      <Logo />
    </>
  )
}

export default Layout
