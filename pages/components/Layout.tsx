import type { NextPage } from 'next'
import Logo from './Logo'
import Navbar from './Navbar'

const Layout: NextPage = ({ children }) => {
  return (
    <div className="relative mx-auto min-h-screen max-w-[1270px] bg-dark px-2">
      {children}
      <Navbar />
      <Logo />
    </div>
  )
}

export default Layout
